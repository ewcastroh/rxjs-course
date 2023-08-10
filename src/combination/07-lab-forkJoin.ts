/**
 * Documentation
 * https://rxjs.dev/api/index/function/forkJoin
 * Accepts an Array of ObservableInput or a dictionary Object of ObservableInput and returns an Observable that emits either an array of values in the exact same order as the passed array, or a dictionary of values in the same shape as the passed dictionary.
 * Most common use is to do many requests at same time and join them in a unique object.
 */

import { catchError, forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'ewcastroh'

forkJoin({
    user: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ).pipe(
        catchError(error => of([]))
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    ),
}).pipe(
    catchError(error => of(error))
)
.subscribe(console.log);
