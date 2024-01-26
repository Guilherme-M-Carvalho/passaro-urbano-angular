import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.scss',
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {


  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  public oferta: OfertaModel | undefined

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.route.params.subscribe(param => {
    })

    
    this.ofertasService.getOfertaById(Number(id))
      .then(el => {
        this.oferta = el
      })

  }



  ngOnDestroy(): void {
  }

}
