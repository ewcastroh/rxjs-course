/**
 * Documentation
 * https://rxjs.dev/api/index/function/switchMap
 * Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.
 */
import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs";
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

// Flattening data
input$
    .pipe(
        debounceTime<KeyboardEvent>(500),
        //pluck<KeyboardEvent, string>('target', 'value'),
        map<KeyboardEvent, string>(event => event.target['value']),
        mergeMap<string, Observable<GitHubUsersResponse>>(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
        //pluck<GitHubUsersResponse, GithubUser[]>('items')
        map<GitHubUsersResponse, GithubUser[]>(response => response['items']),
    );
    /* .subscribe(users => {
        console.log(users);
        showUsers(users);
    }); */

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map(value => value.target['value']),
    //pluck('target', 'value'),
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log);
