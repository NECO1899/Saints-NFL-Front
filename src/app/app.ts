import { Component, signal } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { Login } from './vistas/login/login';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, Login, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProjectEsteban');
}
