import { Component, OnDestroy, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaModel } from '../shared/oferta.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [OfertasService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public ofertas: OfertaModel[] = []
  public sub?: Subscription

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    this.sub = this.ofertasService.getOfertas().subscribe((el: any) => {
      this.ofertas = el
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
