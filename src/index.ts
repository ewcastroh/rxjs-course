/**
 * Documentation
 * https://rxjs.dev/api/index/function/map
 * Maps an object to another object type.
 */

import { fromEvent, map, range } from "rxjs";

/* range(1, 5)
    .pipe(
        map<number, string>(value => (value * 10).toString())
    )
    .subscribe(console.log);
 */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

keyupCode$.subscribe(value => console.log('map', value));
