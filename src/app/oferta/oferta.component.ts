import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.scss',
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  public oferta: OfertaModel | undefined

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.route.params.subscribe(param => {
      console.log({ param });

    })

    this.ofertasService.getOfertaById(Number(id))
      .then(el => {
        this.oferta = el
      })



  }

}
