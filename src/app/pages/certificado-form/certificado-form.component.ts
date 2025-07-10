import { Component } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/CertificadoInterface';
import { CertificadoService } from '../../services/certificado.service';
import { v4 as uuid } from 'uuid'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {
  atividade: string = ''
  certificado: Certificado = {
    id: '',
    nome: '',
    atividades: [],
    data: ''
  }

  constructor(private certificadoService: CertificadoService, private router: Router){}

  formValid(){
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  addAtividade(){
    if(this.atividade.length > 0){
      this.certificado.atividades.push(this.atividade)
      this.atividade = ''
    }
  }

  removerAtividade(i: number){
    this.certificado.atividades.splice(i,1)
  }

  submit(){
    if(this.formValid()){

      this.certificado.data = this.formatarData()
      this.certificado.id = uuid()
      this.certificadoService.adicionarCertificado(this.certificado)

      this.router.navigate(['certificado', this.certificado.id])
    }
  }

  formatarData(){
    const dataAtual = new Date()

    const dia = dataAtual.getDate()
    const mes = dataAtual.getMonth()+1
    const ano = dataAtual.getFullYear()

    const dataFormatada = `${dia}/${mes}/${ano}`

    return dataFormatada
  }
}
