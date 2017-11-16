import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, args?: number): string {

    let nwVal = '';
    for (let i = 0; i < args; i++) {
      nwVal = nwVal + ',' + value;
    }
    return nwVal;
  }
}
