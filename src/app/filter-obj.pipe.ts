import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterObj'
})
export class FilterObjPipe implements PipeTransform {

  transform(values: any[]): any[] {
    return values.sort((a, b) => a.name.localeCompare(b.name));
  }

}
