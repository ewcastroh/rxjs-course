import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

const observable$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'my-token': 'abc123'
});

observable$
    .subscribe(data => console.log('data', data));
