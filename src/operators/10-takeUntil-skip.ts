/**
 * Documentation
 * https://rxjs.dev/api/index/function/takeUntil
 * Emits the values emitted by the source Observable until a notifier Observable emits a value.
 *
 * https://rxjs.dev/api/index/function/skip
 * Returns an Observable that skips the first count items emitted by the source Observable.
 */

import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').appendChild(button);

const counter$ = interval(1000);
//const btnClick$ = fromEvent(button, 'click');
const btnClick$ = fromEvent(button, 'click')
    .pipe(
        tap(() => console.log('Before skip')),
        skip(1),
        tap(() => console.log('After skip')),
    );

counter$
    .pipe(
        takeUntil(btnClick$)
    )
    .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('complete')
    });
