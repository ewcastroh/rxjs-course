/**
 * Documentation
 * https://rxjs.dev/api/index/function/first
 * Emits only the first value (or the first value that meets some condition) emitted by the source Observable.
 */
import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        tap<PointerEvent>(console.log),
        /* map(event => ({
            ...event,
            clientY: event.clientY,
            clientX: event.clientX,
        })), */
        map(({ clientX, clientY }) => ({ clientY, clientX })),
        first(event => event.clientY >= 150)
    )
    .subscribe({
        next: (event) => console.log('next', event),
        complete: () => console.log('complete')
    });
