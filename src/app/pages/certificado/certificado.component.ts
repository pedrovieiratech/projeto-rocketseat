import { Component } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [SecundaryButtonComponent],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent {
  constructor(private router: Router){}

  voltar(){
    this.router.navigate(['/'])
  }
}
