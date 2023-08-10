/**
 * Documentation
 * https://rxjs.dev/api/index/function/concat
 * Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next.
 */

import { concat, interval, of, take } from 'rxjs';
import { pipe } from 'rxjs';

const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1, 2, 3, 4, 5],
    of(9)
).subscribe(console.log);
