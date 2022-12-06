import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-myproduct-create',
  templateUrl: './myproduct-create.component.html',
  styleUrls: ['./myproduct-create.component.css']
})
export class MyproductCreateComponent implements OnInit {

  productForm: FormGroup;
  item_types: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private productService: ProductService,

  ) { }

  ngOnInit(): void {
    this.productFormControls();
    this.getProductData();
  }

  productFormControls(): void
  {
    this.productForm = this.fb.group({
      name : [null, Validators.required],
      item_code : [null, Validators.required],
      item_type : [null, Validators.required],
      item_description : [null, Validators.required],
      price : [null],
    });
  }

  getProductData(): void
  {
    if (this.data.updateProdId)
    {
      this.productService.showProduct(this.data.updateProdId).subscribe(
        (res) => {
          console.log(res)
          this.item_types = res.data.item_types;
          let product = res.data.customer;

          this.productForm.patchValue({
            id: product.id,
            name: product.name,
            item_code: product.item_code,
            item_type: product.item_type,
            item_description: product.item_description,
            price: product.price,
          });
        },
        (err) => {
          console.log('Error', err.message)
        }
      )
    }
    else {
      this.productService.createProduct().subscribe({
        next:(res) => {
          this.item_types = res.data.item_types;
        },
        error: (err) => {
        }
      })
    }
  }

  productFormSubmit()
  {
    if (this.productForm.invalid)
      return

    if(this.data.updateProdId)
    {
      this.productService.updateProduct(this.data.updateProdId, this.productForm.value).subscribe(
        (res) =>  {
          alert('Updated successfully');
          this.close();
          this.productForm.reset();
          this.productFormControls();
        },
        (err) => {
          alert('failed to update');
          this.errorFormValidateServer(err, this.productForm);
        }
      );
    } else {
      this.productService.storeProduct(this.productForm.value).subscribe({
        next: (res) => {
          alert('product stored successully');
          this.close();
          this.productForm.reset();
          this.productFormControls();
        },
        error: (err) => {
          this.errorFormValidateServer(err, this.productForm);
        }
      })
    }
  }

  get formValidate() {
    return this.productForm.controls;
  }

  close(): void {
    this.dialog.closeAll();
  }

  errorFormValidateServer(err : any, formName : any) {
    if (err instanceof HttpErrorResponse) {
      if(err.status === 422) {
        const validatonErrors = err.error.errors;
        Object.keys(validatonErrors).forEach( prop => {
          const formControl = formName.get(prop);
          if(formControl){
            formControl.setErrors({
              serverError: validatonErrors[prop]
            });
          }
        });
      }
    }
  }

}
