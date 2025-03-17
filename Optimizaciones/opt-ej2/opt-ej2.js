'use strict'

// Constantes y variables
const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')

// Click en li:
/*li.forEach((allLi, i)=>{ // Recorremos todos los li
    li[i].addEventListener('click', ()=>{ // Añadimos el evento click a li

        li.forEach((allLi, i)=>{ // Recorremos todos los li otra vez para remover la clase activo
            li[i].classList.remove('activo') // Quitamos la clase activo de todos los li
            bloque[i].classList.remove('activo') // Quitamos la clase activo de todos los bloques
        })
        
        li[i].classList.add('activo') // Añadimos la clase activo al li al hacer click
        bloque[i].classList.add('activo') // Añadimos la clase activo al bloque al hacer click
    })
});*/

// Ternario:

li.forEach((allLi, i) => {
    li[i].addEventListener('click', () => {

        // Recorremos todos los li y bloques para añadir o quitar 'activo'
        li.forEach((allLi, j) => {

            // Si el índice (j) coincide con el índice del li clickeado (i),
            // añadimos 'activo', de lo contrario lo quitamos
            j === i 
                ? li[j].classList.add('activo') 
                : li[j].classList.remove('activo');

            // Igual para los bloques
            j === i 
                ? bloque[j].classList.add('activo') 
                : bloque[j].classList.remove('activo');
        });
    });
});