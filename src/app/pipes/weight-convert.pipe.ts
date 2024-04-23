import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightconvert'
})
export class WeightConvertPipe implements PipeTransform {
  transform(value: number): string {
    return `${(value/1000)}kg `
  }
}