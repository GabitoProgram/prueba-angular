import { Component } from '@angular/core';
import { DatosProyService } from '../datos-proy.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(public datCat: DatosProyService){}
}
