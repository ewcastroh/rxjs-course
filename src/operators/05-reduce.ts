/**
 * Documentation
 * https://rxjs.dev/api/index/function/reduce
 * Applies an accumulator function over the source Observable, and returns the accumulated result when the source completes, given an optional seed value
 */
import { interval, reduce, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (accumulator: number, currentValue: number) => {
    return accumulator + currentValue;
}

const total = numbers.reduce(totalReducer, 0);
console.log('Total Reducer', total);

interval(500)
    .pipe(
        take(6),
        tap(console.log),
        reduce(totalReducer)
    )
    .subscribe({
        next: value => console.log('next: ', value),
        complete: () => console.log('complete')
    })
