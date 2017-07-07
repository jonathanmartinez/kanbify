import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tagfilter',
    pure: false
})
export class TagFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(
          function(item){
            var encontrado = false;
            item.tags.forEach(function(tag, i){
              if(filter == tag.id){
                encontrado = true;
              }
            })
            return encontrado;
          }
        )
    }
}