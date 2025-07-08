import { Component } from '@angular/core';
import { ItemCertificadoComponent } from '../../_components/item-certificado/item-certificado.component';
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecundaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
