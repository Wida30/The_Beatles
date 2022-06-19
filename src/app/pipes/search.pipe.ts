import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(disco: string[], filter: string = '') {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: string[] = disco.filter((el: string) => {
      return el.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }
}
