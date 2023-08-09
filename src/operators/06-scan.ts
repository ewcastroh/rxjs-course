/**
 * Documentation
 * https://rxjs.dev/api/index/function/scan
 * Useful for encapsulating and managing state. Applies an accumulator (or "reducer function") to each value from the source after an initial state is established -- either via a seed value (second argument), or from the first value from the source.
 */

import { from, map, reduce, scan } from "rxjs";

const numbers = [1, 2, 3, 4, 5];
/* const totalAccumulator = () => (acc, curr) => {
    return acc + curr;
} */
const totalAccumulator = (acc, curr) => acc + curr;

// Reduce
from(numbers)
    .pipe(
        reduce(totalAccumulator, 0)
    )
    .subscribe(console.log);


// Scan
from(numbers)
    .pipe(
        scan(totalAccumulator, 0)
    )
    .subscribe(console.log);

// Redux
interface User {
    id?: string;
    authenticated?: boolean;
    token?: string;
    age?: number;
}
const user: User[] = [
    { id: 'eimer', authenticated: false, token: null },
    { id: 'eimer', authenticated: true, token: 'abc' },
    { id: 'eimer', authenticated: true, token: 'abc123' },
];

const state$ = from(user).pipe(
    // Initial State
    //scan((state: any[], item): any[] => [...state,...[item]], [])
    scan((acc, curr) => {
        return { ...acc, ...curr }
    }, { age: 33 })
);
//.subscribe(console.log);

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log);
