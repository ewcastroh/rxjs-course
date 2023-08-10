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
