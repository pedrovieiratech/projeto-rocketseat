import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  constructor(private router: Router){}

  voltar(){
    this.router.navigate(['/'])
  }

  form(){
    this.router.navigate(['/form'])
  }
}
