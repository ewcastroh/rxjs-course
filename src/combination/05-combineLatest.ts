/**
 * Documentation
 * https://rxjs.dev/api/index/function/combineLatest
 * Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.
 */

import { combineLatest, fromEvent, map, pluck } from 'rxjs';

/* const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest(
    keyup$.pipe(
        //pluck('type'),
        map(event => event.type)
    ),
    click$.pipe(
        //pluck('type'),
        map(event => event.type)
    ),
).subscribe(console.log); */

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@mail.com';
input2.placeholder = '*********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (element: HTMLElement) =>
    fromEvent<KeyboardEvent>(element, 'keyup')
        .pipe(
            map<KeyboardEvent, string>(element => element.target['value']),
            //pluck<KeyboardEvent>('target', 'value'),
        );

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log);
