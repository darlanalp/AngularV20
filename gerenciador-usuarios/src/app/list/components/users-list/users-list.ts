import { Component, computed, input, output,  signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  imports: [FormsModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss'
})

export class UsersList {

  filteredUsers = computed(() => {
     return this.users().filter(user => user.toLowerCase().includes(this.search().toLowerCase()))
    }
  );

  users = input.required<string[]>();
  removeUser = output<string>({alias:'remove'});
  
  search = signal('');

  remove(user: string) {
    this.removeUser.emit(user);
  }
  
}
