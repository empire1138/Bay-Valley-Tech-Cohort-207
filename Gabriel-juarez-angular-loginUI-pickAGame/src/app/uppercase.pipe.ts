import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {
  value: any;

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
