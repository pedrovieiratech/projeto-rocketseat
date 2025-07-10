import { Component, OnInit } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/CertificadoInterface';
import { CertificadoService } from '../../services/certificado.service';

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent{
  atividade: string = ''
  certificado: Certificado = {
    nome: '',
    atividades: [],
    data: ''
  }

  constructor(private certificadoService: CertificadoService){}

  formValid(){
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  addAtividade(){
    this.certificado.atividades.push(this.atividade)
    this.atividade = ''
  }

  removerAtividade(i: number){
    this.certificado.atividades.splice(i,1)
  }

  submit(){
    if(this.formValid()){

      this.certificado.data = this.formatarData()
      this.certificadoService.adicionarCertificado(this.certificado)
    }
  }

  formatarData(): string{
    const dataAtual = new Date()

    const dia = dataAtual.getDate()
    const mes = dataAtual.getMonth()+1
    const ano = dataAtual.getFullYear()

    const dataFormatada = `${dia}/${mes}/${ano}`

    return dataFormatada
  }
}
