import { Component, computed, inject, input, output,  signal } from '@angular/core';
import { User } from '../../../../shared/interfaces/user';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-list', 
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
  imports: [MatCardModule, MatButtonModule]
})

export class UsersList {
  
  users = input.required<User[]>();
  removeUser = output<number>({alias:'remove'});
  

  remove(id: number) {
    this.removeUser.emit(id);
  }
  
}
