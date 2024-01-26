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

  private tempoObservable?: Subscription
  private testeObservable?: Subscription

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  public oferta: OfertaModel | undefined

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.route.params.subscribe(param => {
      console.log({ param });

    }, (el) => {
      console.log({ el });

    })

    this.ofertasService.getOfertaById(Number(id))
      .then(el => {
        this.oferta = el
      })

    const tempo = interval(100)
    this.tempoObservable = tempo.subscribe((value) => {
      console.log({ value });

    })

    const myObersvable = new Observable((obs) => {
      console.log({ obs });

      obs.next('Primeiro')
      // obs.error('ERROR')
      obs.complete()

    })


    this. testeObservable = myObersvable.subscribe((val) => {
      console.log({ val });

    }, (err) => console.log(err),
      () => console.log({ com: 'complete' }))
  }

  ngOnDestroy(): void {
    this.tempoObservable?.unsubscribe()
    this.testeObservable?.unsubscribe()
  }

}
