/**
 * Documentation
 * https://rxjs.dev/api/index/function/forkJoin
 * Accepts an Array of ObservableInput or a dictionary Object of ObservableInput and returns an Observable that emits either an array of values in the exact same order as the passed array, or a dictionary of values in the same shape as the passed dictionary.
 */

import { delay, forkJoin, interval, of, take } from 'rxjs';

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3)); // 0, 1, 2
const letters$ = of('a', 'b', 'c').pipe(delay(3500));

/* forkJoin(
    numbers$,
    interval$,
    letters$
).subscribe(console.log); */

/* forkJoin(
    numbers$,
    interval$,
    letters$
).subscribe(response => {
    console.log('numbers:', response[0]);
    console.log('interval:', response[1]);
    console.log('letters:', response[2]);
}); */

/* forkJoin({
    numbers$,
    interval$,
    letters$
}).subscribe(response => {
    console.log(response);
}); */

forkJoin({
    number: numbers$,
    interval: interval$,
    letter: letters$
}).subscribe(response => {
    console.log(response);
});
