import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args: string): any {
    let filter = args ? args.toLocaleLowerCase() : '' ;
    return filter ? value.filter(task => (task.description.toLocaleLowerCase().indexOf(filter) != -1)) : value;
  }
}