/**
 * Documentation
 * https://rxjs.dev/api/index/function/startWith
 * Returns an observable that, at the moment of subscription, will synchronously emit all values provided to this operator, then subscribe to the source and mirror all of its emissions to subscribers.
 *
 * https://rxjs.dev/api/index/function/endWith
 * Returns an observable that will emit all values from the source, then synchronously emit the provided value(s) immediately after the source completes.
 */

import { startWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// References
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Loading...';

const body = document.querySelector('body');


// Streams
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true)
    )
    .subscribe(response => {
        if (response === true) {
            body.append(loadingDiv);
        } else {
            document.querySelector('.loading').remove();
        }
        console.log(response)
    });
