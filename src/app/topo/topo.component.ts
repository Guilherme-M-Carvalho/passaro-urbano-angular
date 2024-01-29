import { Component, OnDestroy, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, Subscription, of } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, catchError } from 'rxjs/operators'
import { OfertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.scss'
})
export class TopoComponent implements OnInit, OnDestroy {

  public serchValue: string = ""
  public ofertas?: Observable<OfertaModel[]>
  constructor(private ofertasService: OfertasService) { }
  public sub?: Subscription
  public subjectSearch: Subject<string> = new Subject<string>()
  public ofertas2: OfertaModel[] = []

  onChangeSearch(value: string) {
    this.subjectSearch.next(value)
    // this.serchValue = value
    // this.sub = this.ofertasService.searchOffer(value).subscribe((el: any) => {
    //   console.log({el});
    // })
  }

  ngOnInit(): void {
    // const res = this.ofertasService.searchOffer(this.serchValue)
    // console.log({res});
    this.ofertas = this.subjectSearch.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((el: string) => {
        if(!el.trim()){
          return of<OfertaModel[]>([])
        }
        return this.ofertasService.searchOffer(el)
      }), 
      catchError((el: any) => {
          return of<OfertaModel[]>([])
      }))
    this.ofertas.subscribe(item => {
      this.ofertas2 = item
    })

    //   switchMap(el => )
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
