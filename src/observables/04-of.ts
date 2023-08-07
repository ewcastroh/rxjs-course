import { of } from "rxjs";

// const observable$ = of(1, 2, 3, 4, 5, 6);
// const observable$ = of(...[1, 2, 3, 4, 5, 6]);
// const observable$ = of([1, 2], {a:1, b:2}, function(){}, true, Promise.resolve(true));
const observable$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5, 6);

console.log('Starting observable$');

observable$.subscribe({
    next: (next) => console.log('next', next),
    error: (error) => console.log(error),
    complete: () => console.log('End of sequence.')
});

console.log('Finishing observable$');
