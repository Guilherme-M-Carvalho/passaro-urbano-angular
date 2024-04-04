export class PedidoModel {
    constructor(
        public endereco: string,
        public number: string,
        public complemento: string,
        public pagamento: string,
    ){}
}