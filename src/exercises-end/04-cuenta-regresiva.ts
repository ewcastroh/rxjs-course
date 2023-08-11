import { interval, map, scan, take, takeWhile } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
        //scan((acc, curr) => acc - 1, inicio + 1),
        //takeWhile(value => value > 0),
        map(i => inicio - i),
        take(inicio + 1),
    );

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();
