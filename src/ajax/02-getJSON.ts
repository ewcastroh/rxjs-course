/**
 * Documentation
 * https://rxjs.dev/api/ajax/ajax
 * It creates an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.
 */
import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

const observable$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'my-token': 'abc123'
});

observable$
    .subscribe(data => console.log('data', data));
