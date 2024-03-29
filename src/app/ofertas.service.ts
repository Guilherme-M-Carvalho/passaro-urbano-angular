import { OfertaModel } from "./shared/oferta.model"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

import { Observable, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_API } from "./app.api";

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

    public comoUsar: Array<any> = [
        {
            id: 1,
            descricao: "Não é necessário agendar"
        },
        {
            id: 2,
            descricao: "Válido de segunda a quinta das 12h as 23h"
        },
        {
            id: 3,
            descricao: "Não é necessário agendar"
        },
        {
            id: 4,
            descricao: "Necessário agendar com no mínimo 48 horas de antecedência"
        },
        {
            id: 5,
            descricao: "Válido de segunda a sábado das 12h as 23h. Necessário agendamento prévio"
        },
        {
            id: 6,
            descricao: "Não é necessário agendar. Sujeito à fila."
        }
    ]

    public ondeFica: Array<any> = [
        {
            id: 1,
            descricao: "Avenida João da Silva, 255, São Paulo - SP"
        },
        {
            id: 2,
            descricao: "Rua Francisco Mendes, 1000, Rio de Janeiro - SP "
        },
        {
            id: 3,
            descricao: "Avenida Lúcio Rodrigues Alves, 33, Fortaleza - CE"
        },
        {
            id: 4,
            descricao: "Avenida José de Oliveira, 550, Campo Grande - MS"
        },
        {
            id: 5,
            descricao: "Avenida Júlia Abrão, 77, São Paulo - SP"
        },
        {
            id: 6,
            descricao: "Estrada Maria das Graças, 12, Salvador - BA "
        }
    ]

    getOfertas(): Observable<Object> {
        return this.http.get("http://localhost:3000/ofertas", { responseType: "json", })
    }

    async getOfertasPorCatergoria(categoria: string): Promise<OfertaModel[]> {
        return this.ofertas.filter(el => el.categoria == categoria)
    }

    async getOfertaById(id: number): Promise<OfertaModel | undefined> {
        return this.ofertas.find(el => el.id === id)
    }

    async getComoUsarOfertaPorid(id: number): Promise<string> {
        return this.comoUsar.find(el => el.id == id)?.descricao
    }

    async getOndeFicaOfertaPorid(id: number): Promise<string> {
        return this.ondeFica.find(el => el.id == id)?.descricao
    }

    searchOffer(term: string): Observable<OfertaModel[]>{
        return this.http.get(`${URL_API}/ofertas?titulo=${term}`, { responseType: "json",  })
        .pipe(map((el: any) =>{
            const res: OfertaModel[] = el
            
            return res
        }))
    }
}