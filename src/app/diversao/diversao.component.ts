import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  // standalone: true,
  // imports: [],
  templateUrl: './diversao.component.html',
  styleUrl: './diversao.component.scss',
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }
  public diversao: OfertaModel[] = []

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCatergoria('diversao')
      .then(el => {
        this.diversao = el
      })
  }
}
