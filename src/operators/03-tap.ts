/**
 * Documentation
 * https://rxjs.dev/api/index/function/tap
 * Used to perform side-effects for notifications from the source observable
 */
import { map, range, tap } from "rxjs";

const numbers$ = range(1, 5);

numbers$
    .pipe(
        tap(x => {
            console.log('Before', x);
            return 100;
        }),
        map(value => (value * 10).toString()),
        tap(x => console.log('After', x)),
        tap({
            next: value => console.log('After Tap2', value),
            complete: () => console.log('All Finished in Tap2')
        })
    )
    .subscribe(value => console.log('Subscriber', value));
