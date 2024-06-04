import { ItemCarrinho } from "./item-carrinho.model";

export class PedidoModel {
    constructor(
        public endereco: string,
        public number: string,
        public complemento: string,
        public pagamento: string,
        public itens: ItemCarrinho[]
    ){}
}