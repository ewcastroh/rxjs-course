/**
 * Documentation
 * https://rxjs.dev/api/index/function/takeWhile
 * Emits values emitted by the source Observable so long as each value satisfies the given predicate, and then completes as soon as this predicate is not satisfied.
 */
import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        //takeWhile(({ y }) => y < 150)
        takeWhile(({ y }) => y < 150, true)
    )
    .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('complete')
    });
