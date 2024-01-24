export interface OfertaModel {
    id: number
    categoria: string
    titulo: string
    descricao_oferta: string
    anunciante: string
    valor: number
    destaque: boolean
    imagens: Image[]
}

export interface Image {
    url: string
}

// export class OfertaModel {
//     public id: number
//     public categoria: string
//     public titulo: string
//     public descricao_oferta: string
//     public anunciante: string
//     public valor: number
//     public destaque: boolean
//     public imagens: Imagen[]
// }