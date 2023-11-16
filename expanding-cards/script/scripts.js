//Capturo los divs y los almaceno en variables
let card1 = document.getElementById('div1');
let card2 = document.getElementById('div2');
let card3 = document.getElementById('div3');
let card4 = document.getElementById('div4');
let card5 = document.getElementById('div5');

//Creo un array con todas las tarjetas
let cards = [card1, card2, card3, card4, card5];

//Capturo los eventos click de cada tarjeta y les asigno una función para que se ejucte cuando se les hace clic
card1.addEventListener('click', expand);
card2.addEventListener('click', expand);
card3.addEventListener('click', expand);
card4.addEventListener('click', expand);
card5.addEventListener('click', expand);

//Función para expandir o contraer tarjetas
function expand(event) {
    let cardClicked = event.currentTarget;
    cards.forEach(card => {
        card.classList.remove('expand');
    });
    cardClicked.classList.add('expand');
}