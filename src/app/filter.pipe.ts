import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(names: string[], nm?: string): string[] {
    let filtered = [];

    if (nm) {
      names.forEach(name => {
        if (name.charAt(0) === nm) {
          filtered.push(name);
        }
      });
      return filtered;
    }
    return names;
  }
}
