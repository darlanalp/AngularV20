import { Component, signal } from '@angular/core';
import { UsersList } from './list/components/users-list/users-list';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [UsersList]
})

export class App {

  remove(user: string) {
    this.users.update(usersX => usersX.filter(u => u !== user));
  }

  users = signal(['Darlan','José', 'Maria', 'Carlão']);
}
