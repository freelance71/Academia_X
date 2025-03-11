import { Component, inject } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-ejemplo-servicios',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './ejemplo-servicios.component.html',
    styleUrl: './ejemplo-servicios.component.scss'
})
export class EjemploServiciosComponent {
    cursoId?: number;
    servicioProductos = inject(ProductosService)
    almacenarProductos: String[]
    constructor() {
        this.almacenarProductos = this.servicioProductos.getProductos()
    }
}