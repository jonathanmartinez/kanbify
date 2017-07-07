import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'datefilter',
    pure: false
})

export class DateFilterPipe implements PipeTransform {
    transform(items: any[], filter: Date): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.todoDate.toDateString() == filter.toDateString());
    }
}