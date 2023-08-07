/**
 * Documentation
 * https://rxjs.dev/api/index/class/Observable
 * https://rxjs.dev/api/index/interface/Observer
 */

import { Observable, Observer } from "rxjs";

// Uncommon way to create a new Observable
// const observable$ = Observable.create();

// Common way to create a new Observable. It's a good practice indicate the objects type to emit.
const observable$ = new Observable<string>(subscriber => {
    // Emitted values
    subscriber.next('Hey!');
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.next('How');
    subscriber.next('are');
    subscriber.next('you?');

    // Forcing an error
    //throw Error('Something went wrong');
    //const person = undefined;
    //person.name = 'Eimer';

    // After complete call, any other emission will be notified to subscribers
    subscriber.complete();
    subscriber.next('Hey!');
});

// For an observable to be executed it must have a subscription
//There are 3 kinds of arguments to send into a subscriber
// 1. Process the subscriber next-method.
observable$.subscribe(response => {
    console.log(response);
});

// 2. Defining 3 callbacks
// First: Emit value
// Second: Emit error
// Third: Complete
observable$.subscribe(
    value => console.log('next: ', value),
    error => console.warn('error: ', error),
    () => console.info('Completed')
);

// 3. Using Observer and send it as argument in the Observable Subscription
const observer: Observer<any> = {
    next: value => console.log('next [Observer]: ', value),
    error: error => console.warn('error [Observer]:', error),
    complete: () => console.info('complete [Observer]')
};
observable$.subscribe(observer);
