import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapitalizeLetter'
})
export class FirstCapitalizeLetterPipe implements PipeTransform {

  transform (string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
}
