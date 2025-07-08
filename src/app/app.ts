import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BaseUiComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-app';
}
