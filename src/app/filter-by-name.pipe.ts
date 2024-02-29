import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(data: Array<any>, searchTxt: string ): Array<any> {
    return data.filter(getData);
        function getData (value: any, index: any){
            if(value.name.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1 ) {
                return data[index];
              }
               
        };
  };
  
  }