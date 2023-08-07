/**
 * Documentation
 * https://rxjs.dev/api/index/function/range
 */

import { asyncScheduler, of, range } from "rxjs";

//const source$ = of(1, 2, 3, 4, 5);
// Sync method
// Start: 1
// Count: 5
//const source$ = range(1, 5);
//const source$ = range(-5, 10);

// Async method
const source$ = range(1, 5, asyncScheduler);


console.log('Start');

source$.subscribe(console.log);

console.log('End');


