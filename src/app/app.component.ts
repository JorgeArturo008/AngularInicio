import { Component, Input } from '@angular/core';
import { VengadoresData } from '../Data/App.vengadores.data' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular1Proyect';

  Vengadores = VengadoresData;

}
