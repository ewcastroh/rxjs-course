/**
 * Examples
 * mergeMap = Executes all subscriptions
 * switchMap = Execute last subscription cancelling other ones
 * exhaustMap = Execute just active subscription
 */

import { map, mergeMap, tap, pluck, fromEvent, catchError, of, switchMap, exhaustMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Helper
const httpLoginRequest = (credentials) => ajax.post('https://reqres.in/api/login?delay=1', credentials)
    .pipe(
        //pluck('response', 'token')
        map(ajaxResponse => ajaxResponse.response['token']),
        catchError(error => of('Error in form data'))
    );

// Form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitButton = document.createElement('button');

// Settings
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitButton.innerHTML = 'Login';

// Add elements to the DOM
form.append(inputEmail, inputPassword, submitButton);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit')
    .pipe(
        tap(event => event.preventDefault()),
        map(event => ({
            email: event.target[0].value,
            password: event.target[1].value
        })),
        // HTTP request
        //mergeMap(httpLoginRequest),   // Executes all subscriptions
        //switchMap(httpLoginRequest),  // Execute last subscription cancelling other ones
        exhaustMap(httpLoginRequest),   // Execute just active subscription
    );

submitForm$.subscribe(token => console.log(token));
