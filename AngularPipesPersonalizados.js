import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contarLetras',
    standalone: true
})
export class ContarLetrasPipe implements PipeTransform {

    transform(value: string): number {
        return value.length
    }
}