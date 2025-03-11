import {Component} from '@angular/core';
import {UpperCasePipe, DecimalPipe} from '@angular/common';
@Component({
  selector: 'app-root',
  template: `
    @for(auto of listaCarrosMazda; track auto.modelo){
    
       <h3>{{auto.modelo | uppercase}}</h3>
       <p> {{auto.precio | number : '3.2-3'}}</p>
    }
  `,
  standalone: true,
  imports: [UpperCasePipe,DecimalPipe],
})
export class AppComponent {
  listaCarrosMazda = [
    {modelo:'mazda 2 sport', precio:20000.1325},
    {modelo:'mazda 2 sedán', precio:20100.1343},
    {modelo:'mazda 3', precio:22300.1243}
  ]
}