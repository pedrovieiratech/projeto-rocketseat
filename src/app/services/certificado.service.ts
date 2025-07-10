import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/CertificadoInterface';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: Certificado[] = []

  constructor() { }

  adicionarCertificado(certificado: Certificado){
    this.certificados.push(certificado)
    console.log(this.certificados)
  }
  //alteracao
}
