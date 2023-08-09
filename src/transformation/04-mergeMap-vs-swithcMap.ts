/**
 * Examples
 * mergeMap = Keep as many internal active subscriptions as required.
 * switchMap = Keep just one internal active subscription (The most recent).
 */

import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    mergeMap(() => interval$),
    switchMap(() => interval$),
)
    .subscribe(console.log);
