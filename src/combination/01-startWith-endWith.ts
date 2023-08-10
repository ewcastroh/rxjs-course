/**
 * Documentation
 * https://rxjs.dev/api/index/function/startWith
 * Returns an observable that, at the moment of subscription, will synchronously emit all values provided to this operator, then subscribe to the source and mirror all of its emissions to subscribers.
 *
 * https://rxjs.dev/api/index/function/endWith
 * Returns an observable that will emit all values from the source, then synchronously emit the provided value(s) immediately after the source completes.
 */

import { endWith, of, startWith } from 'rxjs';

const numbers$ = of(1, 2, 3, 4, 5).pipe(
    startWith('a', 'b', 'c'), // 'a', 'b', 'c' is the first value emitted by this observable
    endWith('x', 'y', 'z'), // 'x', 'y', 'z' is the first value emitted by this observable
);

numbers$
    .subscribe(console.log);
