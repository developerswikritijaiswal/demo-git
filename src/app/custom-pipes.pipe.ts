import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes',
  pure:false,
})
export class CustomPipesPipe implements PipeTransform {
  reverse:any;

  transform(value: any, ...args: unknown[]): any {
    this.reverse = value.split('').reverse().join('');
    return this.reverse;
  }

}
