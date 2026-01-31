import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Auth } from './core/services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  constructor(
   private authService: Auth,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.authService.me().subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {

      }
    })
  }
}
