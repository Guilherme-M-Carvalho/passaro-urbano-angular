import { Component } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  // standalone: true,
  // imports: [],
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.scss'
})
export class OrdemCompraComponent {

  public endereco: string = ''
  public number: string = ''
  public complement: string = ''
  public payment: string = ''
  

  changeEnd(event:any ){
    this.endereco = event
  }
  changeNumber(event:any ){
    this.number = event
  }
  changeComplement(event:any ){
    this.complement = event
  }
  changePayment(event:any ){
    this.payment = event
  }

}
