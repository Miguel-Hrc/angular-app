import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})


export class SortByPricePipe  implements PipeTransform {
  transform(productions: any[], order: "asc" | "desc" = "asc"): any[] {
    return productions.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      }
      return 0;
    }); 
  }
}
