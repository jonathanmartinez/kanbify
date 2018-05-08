import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'datefilter',
    pure: false
})

//Filter tasks in the board by date.
export class DateFilterPipe implements PipeTransform {
    transform(items: any[], filter: any[]): any {
        if (!items || !filter || (!filter[0] && !filter[1] && !filter[2] && !filter[3] && !filter[4] && !filter[5])) {
            return items;
        }

        // filter items array, items which match and return true will be kept, false will be filtered out
        //TODO: refactor
        return items.filter(item => (
          (filter[0] && item['todoDate'] ? item['todoDate'].getTime() >= filter[0].getTime() : filter[0] && !item['todoDate'] ? false : true) &&
          (filter[1] && item['todoDate'] ? item['todoDate'].getTime() <= filter[1].getTime() : filter[1] && !item['todoDate'] ? false : true) &&
          (filter[2] && item['doingDate'] ? item['doingDate'].getTime() >= filter[2].getTime() : filter[2] && !item['doingDate'] ? false : true) &&
          (filter[3] && item['doingDate'] ? item['doingDate'].getTime() <= filter[3].getTime() : filter[3] && !item['doingDate'] ? false : true) &&
          (filter[4] && item['doneDate'] ? item['doneDate'].getTime() >= filter[4].getTime() : filter[4] && !item['doneDate'] ? false : true) &&
          (filter[5] && item['doneDate'] ? item['doneDate'].getTime() <= filter[5].getTime() : filter[5] && !item['doneDate'] ? false : true)
        ));
    }
}
