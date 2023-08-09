/**
 * Documentation
 * https://rxjs.dev/api/ajax/ajax
 * It creates an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.
 *
 * https://rxjs.dev/api/index/function/catchError
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 */
import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = 'https://httpbinx.org/delay/1';

const errorHandling = (response: AjaxError) => {
    console.warn('error', response.message);
    return of({
        ok: false,
        users: []
    })
}

const observable1$ = ajax.getJSON(url);
const observable2$ = ajax(url);

/* observable1$
    .pipe(
        catchError(errorHandling)
    )
    .subscribe(data => console.log('getJSON', data));

observable2$
    .pipe(
        catchError(errorHandling)
    )
    .subscribe(data => console.log('ajax', data));
 */

observable1$
    .pipe(
        catchError(errorHandling)
    )
    .subscribe({
        next: value => console.log('value', value),
        error: error => console.warn('error en subscriber', error),
        complete: () => console.log('getcomplete')
    });
