import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cartpipe'
})

export class CartPipe implements PipeTransform {

    transform(value: number, price:number) {
        return (value*price);
    }
}