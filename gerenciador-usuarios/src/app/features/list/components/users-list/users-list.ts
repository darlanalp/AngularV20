import { Component, computed, inject, input, output,  signal } from '@angular/core';
import { User } from '../../../../shared/interfaces/user';

@Component({
  selector: 'app-users-list', 
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss'
})

export class UsersList {
  
  users = input.required<User[]>();
  removeUser = output<number>({alias:'remove'});
  
  remove(id: number) {
    this.removeUser.emit(id);
  }
  
}
