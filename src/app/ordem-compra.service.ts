import { PedidoModel } from "./shared/pedido.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { URL_API } from "./app.api";
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemComService {

    constructor(private http: HttpClient) { }

    public efetivarCompra(pedido: PedidoModel): Observable<any> {
        console.log("aaa");
        
        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            {
                headers:{
                    'Content-type': 'aplication/json'
                }
            }
        )
        .pipe(
            map((el) =>{
                console.log(el);
                
            })
        )
        
    }
}