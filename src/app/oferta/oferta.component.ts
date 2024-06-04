import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, Subscription, interval } from 'rxjs';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.scss',
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {


  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoCompra: CarrinhoService
  ) { }

  public oferta: OfertaModel | undefined

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = param['id']
      this.ofertasService.getOfertaById(Number(id))
        .then(el => {
          this.oferta = el
        })
    })



  }

  addItens(oferta: OfertaModel) {
    this.carrinhoCompra.includeItem(oferta)
  }


  ngOnDestroy(): void {
  }

}
