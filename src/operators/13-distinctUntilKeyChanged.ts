/**
 * Documentation
 * https://rxjs.dev/api/index/function/distinctUntilKeyChanged
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item, using a property accessed by using the key provided to check if the two items are distinct.
 */
import { distinctUntilKeyChanged, from } from 'rxjs';

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
        distinctUntilKeyChanged('name')
    )
    .subscribe(console.log);
