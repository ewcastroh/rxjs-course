/**
 * Documentation
 * https://rxjs.dev/api/index/function/auditTime
 * Ignores source values for duration milliseconds, then emits the most recent value from the source Observable, then repeats this process.
 */
import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');
click$
    .pipe(
        map(({ x }) => x),
        tap(value => console.log('tap', value)),
        auditTime(2000)
    )
    .subscribe(console.log);
