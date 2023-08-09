/**
 * Documentation
 * https://rxjs.dev/api/ajax/ajax
 * It creates an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.
 *
 * https://rxjs.dev/api/index/function/catchError
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 */
import { catchError, map, of, tap } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';
import { pluck } from 'rxjs';

//const url = 'https://api.github.com/usersX?per_page=5';
const url = 'https://api.github.com/users?per_page=5';

const errorHandling = (response: Response) => {
    if (!response.ok) {
        throw Error(`Status ${response.status}: ${response.statusText}`);
    }
    return response;
};

const catchAjaxError = (error: AjaxError) => {
    const errMessage = `Error fetching users: ${error}`;
    console.warn(errMessage);
    return of([]);
};

const fetchPromise = fetch(url);
/* fetchPromise
    .then(response => response.json())
    .then(data => console.log('Data:', data))
    .catch(error => console.warn('Error in users', error));
 */
/* fetchPromise
    .then(errorHandling)
    .then(response => response.json())
    .then(data => console.log('Data:', data))
    .catch(error => console.warn('Error in users.', error));
 */

ajax(url)
    .pipe(
        tap(console.log),
        map(response => response.response),
        //pluck('response'),
        catchError(catchAjaxError)
    )
    .subscribe(users => console.log('Users:', users));
