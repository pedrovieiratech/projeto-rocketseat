import { Component } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado.component";

@Component({
  selector: 'app-certificados',
  imports: [SecundaryButtonComponent, ItemCertificadoComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
