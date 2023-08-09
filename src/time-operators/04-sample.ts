/**
 * Documentation
 * https://rxjs.dev/api/index/function/sample
 * Emits the most recently emitted value from the source Observable whenever another Observable, the notifier, emits.
 */
import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$
    .pipe(
        sample(click$)
    )
    .subscribe(console.log);
