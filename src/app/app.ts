import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  template: `@If (exibir){
    <app-navbar></app-navbar>
  }`,
  standalone: true
})
export class App {
  protected title = 'my-app';
  exibir: boolean = true
}
