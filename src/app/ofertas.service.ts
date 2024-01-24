import { OfertaModel } from "./shared/oferta.model"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

import { firstValueFrom } from 'rxjs';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    public ofertas: Array<OfertaModel> = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.9,
            destaque: true,
            imagens: [
                {
                    url: "/assets/ofertas/1/img1.jpg"
                },
                {
                    url: "/assets/ofertas/1/img2.jpg"
                },
                {
                    url: "/assets/ofertas/1/img3.jpg"
                },
                {
                    url: "/assets/ofertas/1/img4.jpg"
                }
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.9,
            destaque: true,
            imagens: [
                {
                    url: "/assets/ofertas/2/img1.jpg"
                },
                {
                    url: "/assets/ofertas/2/img2.jpg"
                },
                {
                    url: "/assets/ofertas/2/img3.jpg"
                },
                {
                    url: "/assets/ofertas/2/img4.jpg"
                }
            ]
        },
        {
            id: 3,
            categoria: "restaurante",
            titulo: "Pizzas Grandes",
            descricao_oferta: "Pizza Grande, Mussarela, Marguerita ou outras!",
            anunciante: "Nossa Pizza",
            valor: 21.9,
            destaque: false,
            imagens: [
                {
                    url: "/assets/ofertas/3/img1.jpg"
                },
                {
                    url: "/assets/ofertas/3/img2.jpg"
                },
                {
                    url: "/assets/ofertas/3/img3.jpg"
                },
                {
                    url: "/assets/ofertas/3/img4.jpg"
                }
            ]
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida ompiscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.9,
            destaque: true,
            imagens: [
                {
                    url: "/assets/ofertas/4/img1.jpg"
                },
                {
                    url: "/assets/ofertas/4/img2.jpg"
                },
                {
                    url: "/assets/ofertas/4/img3.jpg"
                },
                {
                    url: "/assets/ofertas/4/img4.jpg"
                },
                {
                    url: "/assets/ofertas/4/img5.jpg"
                },
                {
                    url: "/assets/ofertas/4/img6.jpg"
                }
            ]
        },
        {
            id: 5,
            categoria: "diversao",
            titulo: "Kart",
            descricao_oferta: "Bateria de Kart de 30 minutos.",
            anunciante: "Speed Kart",
            valor: 54.9,
            destaque: false,
            imagens: [
                {
                    url: "/assets/ofertas/5/img1.jpg"
                },
                {
                    url: "/assets/ofertas/5/img2.jpg"
                }
            ]
        }
    ]

    async getOfertas(): Promise<OfertaModel[]> {
        // await this.http.jsonp("http://localhost:3000/ofertas")
        // .then((value: any) => {
        //   console.log(`Result: ` + JSON.parse(value));
        // })
        return this.ofertas
    }

    async getOfertasPorCatergoria(categoria: string): Promise<OfertaModel[]> {

        return this.ofertas.filter(el => el.categoria == categoria)
    }

    async getOfertaById(id: number): Promise<OfertaModel | undefined> {
        return this.ofertas.find(el => el.id === id)
    }
}