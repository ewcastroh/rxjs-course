/**
 * Documentation
 * https://rxjs.dev/api/index/function/concatMap
 * Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one to complete before merging the next.
 */

import { concatMap, fromEvent, interval, take } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    concatMap(() => interval$)
)
    .subscribe(console.log);
