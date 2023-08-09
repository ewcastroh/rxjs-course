/**
 * Documentation
 * https://rxjs.dev/api/index/function/throttleTime
 * Emits a value from the source Observable, then ignores subsequent source values for duration milliseconds, then repeats this process.
 */
import { asyncScheduler, distinctUntilChanged, fromEvent, map, pluck, throttleTime } from "rxjs";

// Example 1
const click$ = fromEvent(document, 'click');
click$
    .pipe(
        throttleTime(3000),
    );
    //.subscribe(console.log);


// Example 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$
    .pipe(
        throttleTime(1000, asyncScheduler, {
            leading: false,
            trailing: true
        }),
        pluck('target', 'value'),
        //map(x => x?.target?.value),
        distinctUntilChanged()
    )
    .subscribe(console.log);
