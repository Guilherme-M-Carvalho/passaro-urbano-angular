import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrl: './como-usar.component.scss',
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor(private route: ActivatedRoute, private ofertas: OfertasService) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((param) => {
      const id = param['id']
      this.ofertas.getComoUsarOfertaPorid(id)
        .then(res => {
          this.comoUsar = res
        })

    })

  }
}
