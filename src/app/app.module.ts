// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OfertaComponent } from './oferta/oferta.component';
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';


// @NgModule decorator with its metadata
@NgModule({
    declarations: [AppComponent, TopoComponent, HomeComponent, RodapeComponent, DiversaoComponent, RestaurantesComponent, OfertaComponent, DescricaoReduzida, OrdemCompraComponent, OrdemCompraSucessoComponent],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }