/**
 * Examples
 * of = Take arguments to generate a sequence
 * from = Create and Observable based on array, promise, iterable, observable
 */

import { from, of } from "rxjs";

const observer = {
    next: value => console.log('next,', value),
    complete: () => console.log('complete')
};

// Emits every array element.
//const source$ = from([1, 2, 3, 4, 5]);

// Emits every string character.
//const source$ = from('Eimer');

// Emits the array as a unique element
//const source$ = of([1, 2, 3, 4, 5]);

// Emits the word as a unique element
//const source$ = of('Eimer');

// Emits every array element. Like from()
//const source$ = of(...[1, 2, 3, 4, 5]);

//source$.subscribe(observer);

// Getting HTTP request info using fetch() method
/* const source$ = from(fetch('https://api.github.com/users/ewcastroh'));

source$.subscribe(async(response) => {
    console.log(response);
    const dataResponse = await response.json();
    console.log(dataResponse);
}); */

const myGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const myIterable = myGenerator();
/* for (let item of myIterable) {
    console.log(item);
} */

from(myIterable).subscribe(observer);
