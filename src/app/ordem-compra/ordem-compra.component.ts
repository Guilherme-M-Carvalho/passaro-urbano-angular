import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemComService } from '../ordem-compra.service';
import { PedidoModel } from '../shared/pedido.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.scss',
  providers: [OrdemComService]
})
export class OrdemCompraComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'address': new FormControl(null, [Validators.required, Validators.maxLength(120), Validators.minLength(3)]),
    'number': new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(1)]),
    'complement': new FormControl(null),
    'payment': new FormControl(null, [Validators.required]),
  })

  public itensCarrinho: ItemCarrinho[] = []

  public idPedido: string | undefined

  constructor(
    private ordemCompraService: OrdemComService,
    public carrinhoCompra: CarrinhoService
  ) { }

  ngOnInit() {
  }

  public confirmarCompra(): void {
    if (!this.form.valid) {
      this.form.get("address")?.markAsTouched()
      this.form.get("number")?.markAsTouched()
      this.form.get("complement")?.markAsTouched()
      this.form.get("payment")?.markAsTouched()
    } else {
      if(this.carrinhoCompra.itens.length){
        this.ordemCompraService.efetivarCompra(new PedidoModel(
          this.form.value.address,
          this.form.value.number,
          this.form.value.complement,
          this.form.value.payment,
          this.carrinhoCompra.itens
        )).subscribe((el) => {
          this.idPedido = el
          this.carrinhoCompra.clear()
        })
      } else {
        alert('Você não selecionou nenhum item!')
      }
    }
  }
}

