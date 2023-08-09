/**
 * Documentation
 * https://rxjs.dev/api/index/function/mergeAll
 * Converts a higher-order Observable into a first-order Observable which concurrently delivers all values that are emitted on the inner Observables.
 */
import { Observable, debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser, GitHubUsersResponse } from '../interfaces';

// References
const body = document.querySelector('body');
const inputText = document.createElement('input');
const orderList = document.createElement('ol');
body.append(inputText, orderList);

// Helpers
const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = '';
    console.log(users);
    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url
        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Show user page';
        anchor.target = '_blank';
        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);
        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(inputText, 'keyup');

// Traditional way without flattening data
/* input$
    .pipe(
        debounceTime(500),
        map(event => {
            const text = event.target['value'];
            return ajax.getJSON(`https://api.github.com/users/${text}`);
        })
    )
    .subscribe(response => {
        response.pipe(
            pluck('url')
        )
            .subscribe(console.log);
    }); */

// Flattening data
input$
    .pipe(
        debounceTime<KeyboardEvent>(500),
        //pluck<KeyboardEvent, string>('target', 'value'),
        map<KeyboardEvent, string>(event => event.target['value']),
        map<string, Observable<GitHubUsersResponse>>(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
        mergeAll<Observable<GitHubUsersResponse>>(),
        //pluck<GitHubUsersResponse, GithubUser[]>('items')
        map<GitHubUsersResponse, GithubUser[]>(response => response['items']),
    )
    .subscribe(users => {
        console.log(users);
        showUsers(users);
    });
