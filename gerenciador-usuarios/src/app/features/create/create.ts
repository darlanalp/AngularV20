import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {
  
  form = new FormGroup({
    name: new FormControl('', { validators: Validators.required })    
  });

  create() {
     
     const user = this.form.controls.name.value;
  }
}
