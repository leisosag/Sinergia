function animacionScroll() {
    const cardAnimada = document.querySelector('.animacion');
    const cardPosicion = cardAnimada.getBoundingClientRect().top;
    const pantallaPosicion = window.innerHeight/1.3;

    if(cardPosicion < pantallaPosicion) {
        cardAnimada.classList.add('mostrar-animacion');
    }
}

window.addEventListener('scroll', animacionScroll);