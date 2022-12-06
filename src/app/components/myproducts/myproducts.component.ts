import { Component, OnInit, ViewChild, AfterViewInit,OnDestroy } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { MyproductCreateComponent } from './myproduct-create/myproduct-create.component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

const dialogConfig = new MatDialogConfig();

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  persons: any[] = [];

  SERVER_PATH = environment.REST_API_URL;
  productsList: any[];
  displayedColumns: string[] = ['image', 'name', 'item_type', 'item_code', 'price',  'actions'];

  updateProductId: number | null;

  constructor(
    private dialog:MatDialog,
    private productService:ProductService,
    private httpClient: HttpClient
  ) { }


  ngOnInit(): void {
    this.dtOptions = {
      pageLength:10
    };

    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.productsList = (res as any).data;
        console.log(this.productsList)
      }
    });
  }

  createProduct()
  {
    dialogConfig.width = "60%";
    dialogConfig.data = {
      updateProdId: this.updateProductId
    }
    this.dialog.open(MyproductCreateComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe(e=>{
      this.getProducts();
      this.updateProductId = null;
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  edit(prodId: number) {
    this.updateProductId = prodId;
    this.createProduct();
  }

  rerender(): void {
    this.dtElement.dtInstance?.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(null);
    });
  }

}
