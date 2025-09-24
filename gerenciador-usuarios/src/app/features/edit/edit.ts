import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../shared/services/users';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class Edit implements OnInit {
  
  userService = inject(Users);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  id = signal<string>(this.activatedRoute.snapshot.paramMap.get('id')!);
  idAsNumber = computed(() => Number(this.id()));

  
  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required], nonNullable:true })    
  });
  ngOnInit(): void {
    this.userService.getById(this.idAsNumber())
                    .subscribe((user) => 
                      this.form.controls.name.setValue(user.name)
                    ); 
  }
  
  submit() {     
     const user = this.form.controls.name.value;
     this.userService.put(this.idAsNumber(), {name: user}).subscribe(()=>{

       //Redireciona para a página princial
       this.router.navigateByUrl('/');
     });

  }
}
