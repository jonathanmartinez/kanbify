import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tagfilter',
    pure: false
})

//Search tasks in the board that contains the selected tag on the sidebar.
export class TagFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.tags.map(t => t.id).includes(filter))
    }
}