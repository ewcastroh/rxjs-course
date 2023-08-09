/**
 * Documentation
 * https://rxjs.dev/api/index/function/takeUntil
 * Emits the values emitted by the source Observable until a notifier Observable emits a value.
 */

import { fromEvent, interval, takeUntil } from "rxjs";

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').appendChild(button);

const counter$ = interval(1000);
const btnClick$ = fromEvent(button, 'click');

counter$
    .pipe(
        takeUntil(btnClick$)
    )
    .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('complete')
    });
