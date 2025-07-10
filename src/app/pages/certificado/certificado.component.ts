import { Component, OnInit } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { ActivatedRoute, Router } from '@angular/router';
import { CertificadoService } from '../../services/certificado.service';
import { Certificado } from '../../interfaces/CertificadoInterface';

@Component({
  selector: 'app-certificado',
  imports: [SecundaryButtonComponent],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit{
  id: string | null = null
  certificado: Certificado | undefined

  constructor(private certificadoService: CertificadoService, private router: Router, private route: ActivatedRoute){}

  voltar(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(
        (item) => item.id == this.id
      );
    });   
    console.log(this.certificado?.id)
  }
}
