/**
 * Documentation
 * https://rxjs.dev/api/index/const/asyncScheduler
 */
import { asyncScheduler } from "rxjs";

//setTimeout(() => {}, 3000);
//setInterval(() => {}, 3000);


const greet1 = () => console.log('Hello World');
const greet2 = (name) => console.log(`Hello ${name}`);

// Use asyncScheduler as timeout
asyncScheduler.schedule(greet1, 2000);

// Always receive an argument in state. In case we need to send several arguments(state) these should be into an object
asyncScheduler.schedule(greet2, 2000, 'Eimer');


// Use asyncScheduler as interval
// It must receive a regular function not an arrow function
// Always receive an argument in state. In case we need to send several arguments(state) these should be into an object
const subscription = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout to stop asyncScheduler interval
setTimeout(() => {
    subscription.unsubscribe();
}, 6000);

// asyncScheduler to stop asyncScheduler interval
asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
