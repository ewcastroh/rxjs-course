/**
 * Documentation
 * https://rxjs.dev/api/index/function/take
 * Emits only the first count values emitted by the source Observable.
 * Cancel the observable subscription, especially in a HTTP request.
 */

import { of, take, tap } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
    .pipe(
        tap(value => console.log('Value in tap:', value)),
        take(3)
    )
    .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('complete')
    });
