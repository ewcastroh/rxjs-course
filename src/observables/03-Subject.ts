import { Observable, Observer, Subject, Subscription } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next [Observer]: ', value),
    error: error => console.warn('error [Observer]:', error),
    complete: () => console.info('complete [Observer]')
};

const intervalSubs$ = new Observable<number>(subscriber => {
    const interval = setInterval(() => {
        subscriber.next(Math.random());
    }, 3000);
    return () => {
        clearInterval(interval);
        console.log('Interval Destroyed.');
    };
});

// const subscription1 = intervalSubs$.subscribe((random) => console.log(`Subscription 1: ${random}`));
// const subscription2 = intervalSubs$.subscribe((random) => console.log(`Subscription 2: ${random}`));

/**
 * Subject properties:
 * 1. Allows multicasting
 * 2. It's and Observer as well
 * 3. next, error and complete
*/
const subject$ = new Subject();
const intervalSubjectSubscription = intervalSubs$.subscribe(subject$);

// const subscription1 = subject$.subscribe((random) => console.log(`Subscription 1: ${random}`));
// const subscription2 = subject$.subscribe((random) => console.log(`Subscription 2: ${random}`));

const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
    // subject$.unsubscribe()
    subject$.next(10);
    subject$.complete();
    intervalSubjectSubscription.unsubscribe();
}, 3500);