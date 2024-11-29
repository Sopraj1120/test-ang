import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }
    return items.filter(item =>
      item.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.UserId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
