import { Injectable, OnInit } from '@angular/core';
import { Certificado } from '../interfaces/CertificadoInterface';
@Injectable({
  providedIn: 'root'
})
export class CertificadoService implements OnInit{

  certificados: Certificado[] = []

  constructor(){}

  ngOnInit(): void {  
  }

  adicionarCertificado(certificado: Certificado){
    this.certificados.push({...certificado})
    //localStorage.setItem('certificados',JSON.stringify(this.certificados))
  }
}
