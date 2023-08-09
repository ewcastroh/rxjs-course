/**
 * Documentation
 * https://rxjs.dev/api/index/function/distinctUntilChanged
 * Returns a result Observable that emits all values pushed by the source observable if they are distinct in comparison to the last value the result observable emitted.
 */
import { distinctUntilChanged, from, of } from 'rxjs';

const numbers$ = of(1, 1, 1, 3, 3, 4, 2, 2, 5, 6, 1, 1);
numbers$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe({
        next: value => console.log('next', value),
        complete: () => console.log('complete')
    });


interface Character {
    name: string;
}

const characters: Character[] = [
    { name: 'Megaman' },
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Zero' },
    { name: 'Dr. Willy' },
    { name: 'X' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Zero' },
];
from(characters)
    .pipe(
        distinctUntilChanged((previous, current) => previous.name === current.name)
    )
    .subscribe(console.log);
