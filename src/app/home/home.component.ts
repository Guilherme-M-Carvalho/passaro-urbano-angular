import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: OfertaModel[] = []

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    (async () => {
      this.ofertas = await this.ofertasService.getOfertas()
      console.log({ ofertas: this.ofertas });
    })()
  }
}
