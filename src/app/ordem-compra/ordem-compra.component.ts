import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemComService } from '../ordem-compra.service';
import { NgForm } from '@angular/forms';
import { PedidoModel } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.scss',
  providers: [OrdemComService]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') public form: NgForm | undefined


  public idPedido: string | undefined

  constructor(private ordemCompraService: OrdemComService) { }

  submit(form: NgForm){
    console.log({form: this.form});
    console.log(this.form?.value);
    if(!this.form?.value){
      return
    }
    const pedido: PedidoModel =new PedidoModel(
      this.form.value.address,
      this.form.value.number,
      this.form.value.complement,
      this.form.value.payment
    )

    this.ordemCompraService.efetivarCompra(pedido)
    .subscribe((el) => {
      console.log(el);
        this.idPedido = el
    })
  }

  ngOnInit() {

  }

  
}
