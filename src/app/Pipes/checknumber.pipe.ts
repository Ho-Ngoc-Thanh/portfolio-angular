import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checknumber',
})
export class ChecknumberPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (value > 10) {
      return value + ' more than 10';
    }
    return value + ' less than 10';
  }
}
