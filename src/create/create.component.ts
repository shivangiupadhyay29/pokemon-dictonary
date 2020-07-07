import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from "@angular/forms";
import { getProperty, setProperty, resetProperty } from '../localstorage';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   form: FormGroup;
   numberTypes: string[] = ['Landline', 'Mobile'];
   categories: string[] = ['Electronics', 'Cloths', 'Blankets'];
   name: FormControl;
   description: FormControl;
   price: FormControl;
   category: FormControl;
   imageUrl: FormControl;
   phoneNumber: FormControl;
   select: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
        this.name =  new FormControl( '' , [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('^[0-9a-zA-Z]+$')
          ]);
        this.description = new FormControl('' , [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[0-9a-zA-Z]+$')
        ]);
        this.price = new FormControl('' ,
          [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{2})?$')]
        );
        this.category = new FormControl('' ,
        Validators.required,
      );
        this.imageUrl = new FormControl('' , [
        Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
      ]);
        this.phoneNumber = new FormControl('' , [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$')
        ]);
        this.select = new FormControl('');
  }

  createForm() {
    this.form = new FormGroup({
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      imageUrl:  this.imageUrl,
      phoneNumber: this.phoneNumber,
      select: this.select
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const list = getProperty('product_list') ?? [];
      setProperty('product_list', [...list, this.form.value]);
      this.form.reset();
    } else {
      alert('Invalid Entries');
    }
  }

  onReset() {
    this.form.reset();
  }

}
