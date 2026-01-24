import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isActive = true;
}
