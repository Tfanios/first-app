import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmconvert'
})
export class CmConvertPipe implements PipeTransform {
  transform(value: number): string {
    return `${value/100}m`
  }
}