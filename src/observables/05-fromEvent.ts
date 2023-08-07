/**
 * Documentation
 * https://rxjs.dev/api/index/function/fromEvent
 */

import { fromEvent } from "rxjs";

/**
 * DOM events
 */
const source1$ = fromEvent<MouseEvent>(document, 'click');
const source2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (value) => console.log('next', value)
};

//source1$.subscribe(observer);
/* source1$.subscribe(event => {
    console.log(event.x);
    console.log(event.y);
}); */
source1$.subscribe(({x, y}) => {
    console.log(x, y);
});

source2$.subscribe(event => {
    console.log(event.key);
});
