// Efecto de apertura de enlaces
function openLink(url) {
    window.open(url, '_blank');
}

// Animación de aparición en la carga
window.addEventListener('load', () => {
    document.querySelector('.container').classList.add('loaded');
});

// Animación de clic en la tarjeta con efecto de rebote sutil
function animateCard(card) {
    card.classList.add('clicked');
    setTimeout(() => {
        card.classList.remove('clicked');
    }, 600); // Duración de la animación de rebote
}

// Efecto de animación de hover
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
