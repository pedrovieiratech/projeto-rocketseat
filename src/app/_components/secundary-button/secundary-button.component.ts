import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secundary-button',
  imports: [CommonModule],
  templateUrl: './secundary-button.component.html',
  styleUrl: './secundary-button.component.css'
})
export class SecundaryButtonComponent {
  @Input() textoBotao: string = ''
  @Input() icone: string = ''
  @Input() disabled: boolean = false

}
