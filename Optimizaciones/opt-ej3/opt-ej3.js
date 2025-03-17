'use strict'

// Constantes y variables
const imgList = document.querySelectorAll('.img');
const lightbox = document.querySelector('.lightbox');
const grande = document.querySelector('.grande');
const closeBtn = document.querySelector('.close');

// Definir funciones para asignarlas mas adelante con Handler
/*const closeBtnHandler = () => lightbox.classList.remove('isActive')
const imgListHandler = index => {
    lightbox.classList.add('isActive')
    grande.src = imgList[index].src
}

// Cuando hago CLICK en .img:
    // .lightbox se le ADD la clase isActive
    // .grande añadrile el atributo SRC de la .img
imgList.forEach((allImg, index)=>{
    imgList[index].addEventListener('pointerdown', ()=>{ // A cada imagen se le añade el click y el callback
        imgListHandler(index)
    })
});

closeBtn.addEventListener('pointerdown', closeBtnHandler);*/

// Ternario:

//--------------------------------------------------------------------------------------------------------------------------
// Este me parecia que ya estaba mas optimizado porque definimos las funciones handler antes para asignarla
// despues y asi optimizar el codigo y no se me ocurria nada, revise en internet para otras formas para intentar resolverlo
//--------------------------------------------------------------------------------------------------------------------------

const closeBtnHandler = () => lightbox.classList.contains('isActive') 
    ? lightbox.classList.remove('isActive') 
    : null;

const imgListHandler = index => {
    !lightbox.classList.contains('isActive') 
        ? lightbox.classList.add('isActive') 
        : null;
    grande.src = imgList[index].src;
}

// Event listeners usando funciones de flecha más cortas
imgList.forEach((allImg, index) => {
    imgList[index].addEventListener('pointerdown', () => imgListHandler(index));
});

closeBtn.addEventListener('pointerdown', closeBtnHandler);