/**
 * Documentation
 * https://rxjs.dev/api/index/function/distinct
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 */
import { distinct, from, of } from 'rxjs';

const numbers$ = of(1, 1, 1, 3, 3, 4, 2, 2, 5, 6);
numbers$
    .pipe(
        distinct()
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
    { name: 'X' },
    { name: 'Zero' },
    { name: 'Dr. Willy' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Zero' },
];
from(characters)
    .pipe(
        distinct(character => character.name)
    )
    .subscribe(console.log);
