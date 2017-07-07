import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stateFilter',
    pure: false
})

//Filter tasks based on their state(to do, doing, done).
export class StateFilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.state.indexOf(filter) !== -1);
    }
}