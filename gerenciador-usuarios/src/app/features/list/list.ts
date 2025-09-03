import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from "@angular/core";
import { UsersList } from "./components/users-list/users-list";
import { SearchInput } from "./components/search-input/search-input";
import { Users } from "../../shared/services/users";
import { User } from "../../shared/interfaces/user";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { take } from "rxjs";
import { RouterLink } from "@angular/router";
import { MatButton, MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-list',
    templateUrl: './list.html',
    styleUrls: ['./list.scss'],
    imports: [UsersList, SearchInput, RouterLink, MatButtonModule]
})
export class ListComponent implements OnInit { isLoading = signal(true);

  usersService = inject(Users);
  destroyRef = inject(DestroyRef);
  search = signal('');
  users = signal<User[]>([]);
  
  //Sempre declarar no inicio ou no construtor, tais como as declarações de signigals
  //Cria um observador e executa sempre que signal dento {} roda
  effect = effect (() =>{
    this.isLoading.set(true);
    this.getUsers();
  });

  
  ngOnInit(): void {
    this.getUsers();
  }
  
  private getUsers() {
    this.usersService.getAll(this.search())
    .pipe(
      //Agular 19
      takeUntilDestroyed(this.destroyRef),
      //Determina quantas vez o observador roda, no exemplo abaixo, roda uma vez e morre
      //é com se fosse um double check para garantir que foi executado uma so vez
      take(1)
    )
    .subscribe((users) => { 
       this.users.set(users)
       this.isLoading.set(false);
    });
  }

  remove(id: number) {
    this.usersService.delete(id).subscribe(() => { 
       this.users.update(usersX => usersX.filter(u => u.id !== id));       
    });    
  }

}