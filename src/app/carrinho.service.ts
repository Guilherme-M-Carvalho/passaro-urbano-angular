import { ItemCarrinho } from "./shared/item-carrinho.model"
import { OfertaModel } from "./shared/oferta.model"

class CarrinhoService {
    public itens: ItemCarrinho[] = []

    exibirItens(): ItemCarrinho[] {
        return this.itens
    }

    includeItem(oferta: OfertaModel) {
        const item: ItemCarrinho = {
            id: String(oferta.id),
            descricao_oferta: oferta.descricao_oferta,
            img: oferta.imagens[0],
            quantidade: 1,
            titulo: oferta.titulo,
            valor: oferta.valor
        }
        const index = this.itens.findIndex(el => el.id == String(oferta.id))
        if (index > -1) {
            this.itens[index].quantidade += 1
        } else {
            this.itens.push(item)
        }
    }

    total(): number {
        return this.itens.reduce((acc, val) => (val.valor * val.quantidade) + acc, 0)
    }

    add(item: ItemCarrinho) {
        const index = this.itens.findIndex(el => el.id == item.id)
        if (index > -1) {
            this.itens[index].quantidade += 1
        }
    }

    remove(item: ItemCarrinho) {
        const index = this.itens.findIndex(el => el.id == item.id)
        if (index > -1) {
            if (this.itens[index].quantidade > 1) {
                this.itens[index].quantidade -= 1
            } else {
                this.itens.splice(index, 1)
            }
        }
    }

    clear(){
        this.itens = []
    }
}

export { CarrinhoService }