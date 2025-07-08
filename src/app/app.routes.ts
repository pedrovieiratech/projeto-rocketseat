import { Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';

export const routes: Routes = [
    {
        path: "",
        component: CertificadosComponent
    },
    {
        path: "form",
        component: CertificadoFormComponent
    },
    {
        path: "certificado/:id",
        component: CertificadoComponent
    }
];
