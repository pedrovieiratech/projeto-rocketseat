import { Component, Input } from '@angular/core';
import { SecundaryButtonComponent } from "../secundary-button/secundary-button.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
  @Input() id: string = ''; 
  @Input() nome: string = ''; 
  @Input() data: string = ''; 

  constructor(private router: Router){}

  carregarCertificado(){
    this.router.navigate(['/certificado',this.id])
  }
}
