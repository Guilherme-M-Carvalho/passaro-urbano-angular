import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.scss'
})
export class TopoComponent implements OnInit {

  public serchValue: string = ""
  constructor(private ofertas: OfertasService){}
  public sub?: Subscription


  onChangeSearch(value: string){
    this.serchValue = value
    this.sub = this.ofertas.searchOffer(value).subscribe((el: any) => {
      console.log({el});
    })
  }

  ngOnInit(): void {
    const res = this.ofertas.searchOffer(this.serchValue)
    console.log({res});
    
  }
}
