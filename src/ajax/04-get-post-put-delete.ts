/**
 * Documentation
 * https://rxjs.dev/api/ajax/ajax
 * It creates an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.
 */
import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

ajax.get(url, {
    responseType: 'json' // this is the default anyway
})
    .subscribe(data => console.log('get', data));

ajax.post(url, {
    id: 1,
    name: 'Eimer'
}, {
    'Content-type': 'application/x-www-form-urlencoded',
    'my-token': 'ABC123'
})
    .subscribe(data => console.log('post', data));

ajax.put(url, {
    id: 1,
    name: 'Eimer'
}, {
    'Content-type': 'application/x-www-form-urlencoded',
    'my-token': 'ABC123'
})
    .subscribe(data => console.log('put', data));

ajax.delete(url, {
    'Content-type': 'application/x-www-form-urlencoded',
    'my-token': 'ABC123'
})
    .subscribe(data => console.log('delete', data));

ajax({
    url,
    method: 'GET',
    headers: {
        'X-CustomHeader': 'some value here!',
        'my-token': 'ABC123'
    },
    body: {
        'id': 5
    },
})
    .subscribe(data => console.log('GET', data));
