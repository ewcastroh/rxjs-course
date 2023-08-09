/**
 * Documentation
 * https://rxjs.dev/api/index/function/mergeMap
 * Projects each source value to an Observable which is merged in the output Observable.
 */

import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from 'rxjs';

const letters$ = of('a', 'b', 'c');

letters$
    .pipe(
        mergeMap((letter) => interval(1000).pipe(
            map(i => letter + i),
            take(3)
        ))
    )
    .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('complete')
    });

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$
    .pipe(
        // Merges a stream with itself
        mergeMap(() => interval$.pipe(
            takeUntil(mouseup$)
        ))
    )
    .subscribe(console.log);
