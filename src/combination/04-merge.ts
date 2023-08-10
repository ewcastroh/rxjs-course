/**
 * Documentation
 * https://rxjs.dev/api/index/function/merge
 * Creates an output Observable which concurrently emits all values from every given input Observable.
 */

import { fromEvent, map, merge, pluck } from 'rxjs';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyup$.pipe(
        //pluck('type'),
        map(event => event.type)
    ),
    click$.pipe(
        //pluck('type'),
        map(event => event.type)
    ),
).subscribe(console.log);
