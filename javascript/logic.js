                                          /**  EVENTOS     */
/** onchanger
 * onmouseOver
 * onreset
 * onselect
 * formulario
 */



/**ONCHANGER */
const seleccionarSabor = document.querySelector('.nieve');

seleccionarSabor.addEventListener('change', (event) => {
    const resultado = document.querySelector('.resultado');
    resultado.textContent = `Te gusta el Olor a ${event.target.value}`;

});


/**onmouseOver */
function bigImg(x) {
    x.style.width = "200px"
}

function smollImg(x) {
    x.style.width = "100px"
}

/**Onreset */
document.getElementById("myForm").onreset

/**onselect */
function resaltar(){
    const resultado = document.querySelector('#resultado2');
    resultado.textContent = "campo resaltado";
}

