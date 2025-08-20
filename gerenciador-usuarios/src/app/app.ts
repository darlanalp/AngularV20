import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  styleUrl: './app.scss',  
  imports:[RouterOutlet, MatToolbarModule, RouterLink]
})

export class App  {

 
  
}
