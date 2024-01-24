import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OfertasService } from './ofertas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [OfertasService]
})
export class AppComponent {
  title = 'app2';

}
