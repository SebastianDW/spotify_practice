import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotify';
  //copiado a partir de aqui
  nombre: string = 'David'
  edad: number = 40
  telefono: null= null
  direccion: undefined = undefined
  otros: any;
  
}


