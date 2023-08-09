/**
 * Documentation
 * https://rxjs.dev/api/index/function/debounceTime
 * Emits a notification from the source Observable only after a particular time span has passed without another source emission.
 */
import { debounceTime, distinctUntilChanged, fromEvent, map, pluck } from "rxjs";

// Example 1
const click$ = fromEvent(document, 'click');
click$
    .pipe(
        debounceTime(3000),
    );
    //.subscribe(console.log);


// Example 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$
    .pipe(
        debounceTime(1000),
        pluck('target', 'value'),
        //map(x => x?.target?.value),
        distinctUntilChanged()
    )
    .subscribe(console.log);
