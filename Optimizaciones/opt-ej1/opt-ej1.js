'use strict'

// Variables para hacer funcionar el acordeon.
const bloque = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');

// Cuando se haga CLICK en h2:
// QUITAR la clase activo de TODOS los bloques.
// Vamos a añadir la clase activo al BLOQUE con la POSICION del h2.

/*h2.forEach((allH2, i)=>{ // Recorremos todos los h2, cada uno de ellos y su posicion.
h2[i].addEventListener('click', ()=>{ // Añadimos el evento click a h2.
    
    bloque.forEach((allBloque, i)=>{ // Recorremos todos los bloques.
        bloque[i].classList.remove('activo'); // Quitamos la clase activo de todos los bloques.
    })
    bloque[i].classList.add('activo'); // Añadimos la clase activo al BLOQUE al hacer click en h2.
})
});*/

//Ternario:

h2.forEach((allH2, i) => {
    h2[i].addEventListener('click', () => {

        
        bloque.forEach((allBloque, j) => {

            // Usamos ternario para añadir o quitar la clase 'activo'
            // Si el índice actual (j) es igual al índice del h2 clickeado (i), añadimos 'activo'
            // De lo contrario, eliminamos 'activo'
            j === i 
                ? bloque[j].classList.add('activo') 
                : bloque[j].classList.remove('activo');

        });
    });
});