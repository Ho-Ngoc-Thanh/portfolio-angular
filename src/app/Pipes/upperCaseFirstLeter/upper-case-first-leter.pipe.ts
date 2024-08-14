import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseFirstLeter',
})
export class UpperCaseFirstLeterPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
