import { Component, computed, inject, OnInit, signal } from "@angular/core";
import { UsersList } from "./components/users-list/users-list";
import { SearchInput } from "./components/search-input/search-input";
import { Users } from "../../shared/services/users";

@Component({
    selector: "app-list",
    template: `@if (isLoading()) {
                        <div>Loading...</div>
                    }
                    @else{
                        <app-search-input [(search)]="search"/>
                        <app-users-list [users]="filteredUsers()" (remove)="remove($event)"/>
                    }`,
    imports: [UsersList, SearchInput]
})
export class ListComponent implements OnInit { isLoading = signal(true);

  usersService = inject(Users);
  search = signal('');
  users = signal<string[]>([]);
  
  filteredUsers = computed(() => {
     return this.users().filter(user => user.toLowerCase().includes(this.search().toLowerCase()))
    }
  );

  
  ngOnInit(): void {

    this.usersService.getAll().subscribe((users) => { 
       this.users.set(users)
       this.isLoading.set(false);
    });
  }
  
  remove(user: string) {
    this.users.update(usersX => usersX.filter(u => u !== user));
  }

}