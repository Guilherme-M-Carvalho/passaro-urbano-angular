import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  // standalone: true,
  // imports: [],
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.scss',
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  constructor(private ofertasService: OfertasService){}
  public ofertas: OfertaModel[] = []

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCatergoria('restaurante')
    .then(el => {
        this.ofertas = el
    })
  }

}
