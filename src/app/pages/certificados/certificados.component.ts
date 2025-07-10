import { Component, OnInit } from '@angular/core';
import { ItemCertificadoComponent } from '../../_components/item-certificado/item-certificado.component';
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../services/certificado.service';
import { Certificado } from '../../interfaces/CertificadoInterface';


@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecundaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit{

  id: string | null = null
  certificado: Certificado | undefined
  certificados: Certificado[] = []

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(
        (item) => item.id == this.id
      );
    });   
  }
}
