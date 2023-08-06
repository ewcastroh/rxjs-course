import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next [Observer]: ', value),
    error: error => console.warn('error [Observer]:', error),
    complete: () => console.info('complete [Observer]')
};

const intervalObs$ = new Observable<number>(subscriber => {
    // Create counter
    let counter = 0;
    const interval = setInterval(() => {
        subscriber.next(counter++);
        console.log(`Interval: ${counter}`);
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Interval Destroyed.');
    }
});

const subscription1: Subscription =  intervalObs$.subscribe(num => console.log('Subscription Num: ', num));
const subscription2: Subscription =  intervalObs$.subscribe(num => console.log('Subscription Num: ', num));
const subscription3: Subscription =  intervalObs$.subscribe(num => console.log('Subscription Num: ', num));

setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();

    console.log('Timeout Completed.');
}, 3000);