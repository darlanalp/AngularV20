import { Component, computed, signal } from '@angular/core';
import { UsersList } from './list/components/users-list/users-list';
import { SearchInput } from "./list/components/search-input/search-input";

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [UsersList, SearchInput]
})

export class App {

  search = signal('');
  
  filteredUsers = computed(() => {
     return this.users().filter(user => user.toLowerCase().includes(this.search().toLowerCase()))
    }
  );

  remove(user: string) {
    this.users.update(usersX => usersX.filter(u => u !== user));
  }

  users = signal(['Darlan','José', 'Maria', 'Carlão']);
}
