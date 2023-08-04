import { Observable } from "rxjs";

const greetings: string = 'Hello Reactive World!';
console.log(greetings);

// Uncommon way to create a new Observable
// const observable$ = Observable.create();

// Common way to create a new Observable. It's a good practice indicate the objects type to emit.
const observable$ = new Observable<string>( subscriber => {
    // Emitted values
    subscriber.next('Hey!');
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.next('How');
    subscriber.next('are');
    subscriber.next('you?');

    // After complete call, any other emission will be notified to subscribers
    subscriber.complete();
    subscriber.next('Hey!');
});

// For an observable to be executed it must have a subscription
observable$.subscribe(console.log);