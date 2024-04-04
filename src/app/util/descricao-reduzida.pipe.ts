import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "descriptionRedu"
})
export class DescricaoReduzida implements PipeTransform {
    transform(texto: string, truncarEm: number): string {
        console.log(texto.length);
        
        if(texto.length > truncarEm) return texto.substring(0,truncarEm) + '...'
        return texto
    }
}