import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <label for='usuario'>
      Usuario:
      <input id='usuario' type='text' [(ngModel)]='user' />
    </label>
    <button (click)='mostrarNombre()'>Mostrar Alerta</button>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class UserComponent {
  user = '';
  mostrarNombre() {
      alert('Bienvenido '+this.user+ '!!')
  }
}