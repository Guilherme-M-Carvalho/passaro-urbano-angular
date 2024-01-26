import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrl: './onde-fica.component.scss'
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: string = ''

  constructor(private route: ActivatedRoute, private ofertas: OfertasService) { }

  ngOnInit(): void {
    const id = this.route.parent?.snapshot.params['id']
    this.ofertas.getOndeFicaOfertaPorid(id)
      .then(res => {
        this.ondeFica = res
      })
  }
}
