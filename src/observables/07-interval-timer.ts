/**
 * Documentation
 * https://rxjs.dev/api/index/function/interval
 * https://rxjs.dev/api/index/function/timer
 */

import { interval, timer } from "rxjs";

const observer = {
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
};

const todayIn5 = new Date();
todayIn5.setSeconds(todayIn5.getSeconds() + 5);

// interval is an async method
// Executes every 1000 milliseconds
const interval$ = interval(1000);

// timer is an async method
// Executes and completes after 2000 milliseconds
//const timer$ = timer(2000);

// This means JS will execute it as soon as possible
//const timer$ = timer(0);
//const timer$ = timer();

// After 2000 milliseconds it will emit a new value every second
//const timer$ = timer(2000, 1000);

// Used to schedule an execution
const timer$ = timer(todayIn5);

console.log('Start');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('End');
