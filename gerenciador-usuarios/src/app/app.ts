import { Component, signal } from '@angular/core';
import { signalGetFn } from '@angular/core/primitives/signals';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 shwow = signal(true);
 users = signal(['Darlan','José', 'Maria']);
}
