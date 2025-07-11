import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadoService } from './services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BaseUiComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected title = 'my-app';

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    // const certificados = localStorage.getItem('certificados');
    // this.certificadoService.certificados = certificados
    //   ? JSON.parse(certificados)
    //   : [];
    // console.log(this.certificadoService.certificados);
  }

}
