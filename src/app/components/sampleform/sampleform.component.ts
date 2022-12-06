import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    let fname = f.value.first;
    let lname = f.value.last;
    
    console.log(fname);  // { first: '', last: '' }
    console.log(lname);
    console.log(f.valid);  // false
  }
}
