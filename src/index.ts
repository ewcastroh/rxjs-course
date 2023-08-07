/**
 * Documentation
 * https://rxjs.dev/api/index/function/filter
 * Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.
 */

import { filter, from, range } from "rxjs";
import { pluck } from 'rxjs';

range(10, 10)
    .pipe(
        filter((value, index) => {
            console.log('index', index);
            return value % 2 === 1
        })
    )
    .subscribe(console.log);

interface character {
    type: string;
    name: string;
}

const characters: character[] = [
    {
        type: 'hero',
        name: 'Batman'
    },
    {
        type: 'villain',
        name: 'Joker'
    },
    {
        type: 'hero',
        name: 'Robin'
    }
];

const charactersObservable$ = from(characters)
    .pipe(
        // filter heroes
        filter(({type}) => type !== 'hero'),
        pluck('name')
    )
    .subscribe(console.log);