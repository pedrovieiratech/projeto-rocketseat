import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { ActivatedRoute, Router } from '@angular/router';
import { CertificadoService } from '../../services/certificado.service';
import { Certificado } from '../../interfaces/CertificadoInterface';
import html2canvas from 'html2canvas';

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

  @ViewChild('certificadoRef', {static: false}) certificadoElement!: ElementRef;

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

  instalarCertificado(){
    html2canvas(this.certificadoElement.nativeElement)
    .then((canvas: HTMLCanvasElement) => {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'certificado.png'
      link.click()
    })
  }
}
