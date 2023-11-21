function EventoHTML(){
   document.querySelector(`#info`).innerHTML="Has hecho click en el botón con evento HTML";
    document.querySelector(`#info`).style.background = "red"
} 

const botonaddEventListener = document.querySelector(`#btnAddEventListener`);
botonaddEventListener.addEventListener('click', function() {
    document.querySelector(`#info`).innerHTML="Has hecho click en el botón con addEventListener";
    document.querySelector(`#info`).style.background = "green"
});


const botonHandler = document.querySelector('#btnEventHandler');

botonHandler.onclick = function() {
    document.querySelector(`#info`).innerHTML="Has hecho click en el botón con event handler";
    document.querySelector(`#info`).style.background = "yellow"
};

