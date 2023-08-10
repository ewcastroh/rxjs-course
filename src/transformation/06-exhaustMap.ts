/**
 * Documentation
 * https://rxjs.dev/api/index/function/exhaustMap
 * Projects each source value to an Observable which is merged in the output Observable only if the previous projected Observable has completed.
 */

import { exhaustMap, fromEvent, interval, take } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap(() => interval$)
)
    .subscribe(console.log);
