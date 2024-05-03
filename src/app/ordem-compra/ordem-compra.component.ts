import { Component, OnInit } from '@angular/core';
import { OrdemComService } from '../ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  // standalone: true,
  // imports: [],
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.scss',
  providers: [OrdemComService]
})
export class  OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: OrdemComService){}

  public idPedidoCompra: string | undefined
  public endereco: string = ''
  public number: string = ''
  public complement: string = ''
  public payment: string = ''

  public enderecoValido: boolean | undefined
  public numberValido: boolean | undefined
  public complementValido: boolean | undefined
  public paymentValido: boolean | undefined
  public formEstado: boolean = true

  changeEnd(event: any) {
    this.endereco = event
    this.enderecoValido = this.verifyValid(this.endereco, 3)
    this.handleForm()
  }
  changeNumber(event: any) {
    this.number = event
    this.numberValido = this.verifyValid(this.number, 1)
    this.handleForm()
  }
  changeComplement(event: any) {
    this.complement = event
    this.complementValido = this.verifyValid(this.complement, 0)
    this.handleForm()
  }
  changePayment(event: any) {
    this.payment = event
    this.paymentValido = this.verifyValid(this.payment, 0)
    this.handleForm()
  }

  verifyValid(string: string, length: number): boolean {
    if (string.length > length) return true
    return false
  }

  handleForm() {
    if (this.enderecoValido &&
      this.numberValido &&
      this.paymentValido) {
      this.formEstado = false
    } else this.formEstado = true
  }

  ngOnInit(): void {
    
  }

  confirmCompra(){
    if(!this.formEstado){
      this.ordemCompraService.efetivarCompra({
        complemento: this.complement,
        endereco: this.endereco,
        number: this.number,
        pagamento: this.payment
      }).subscribe((el) => {
        this.idPedidoCompra = el
      })
    }
  }

}