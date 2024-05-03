import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrl: './ordem-compra-sucesso.component.scss'
})
export class OrdemCompraSucessoComponent {

  @Input('idPedidoCompra') public idPedidoCompra: string | undefined
}
