// Cargar sonidos
const sonidos = {
    'DO': new Audio('sounds/DO.mp3'),
    'DO#': new Audio('sounds/D.mp3'), 
    'RE': new Audio('sounds/RE.mp3'),
    'RE#': new Audio('sounds/R.mp3'), 
    'MI': new Audio('sounds/MI.mp3'),
    'FA': new Audio('sounds/FA.mp3'),
    'FA#': new Audio('sounds/F.mp3'), 
    'SOL': new Audio('sounds/SOL.mp3'),
    'SOL#': new Audio('sounds/S.mp3'), 
    'LA': new Audio('sounds/LA.mp3'),
    'LA#': new Audio('sounds/L.mp3'), 
    'SI': new Audio('sounds/SI.mp3'),
};

// Función para reproducir el sonido
function playSound(tecla) {
    if (sonidos[tecla]) {
        sonidos[tecla].currentTime = 0; // Reiniciar el sonido
        sonidos[tecla].play();
    }
}

// Evento de clic para cada tecla
document.querySelectorAll('.tecla').forEach(tecla => {
    tecla.addEventListener('click', () => {
        const nota = tecla.getAttribute('data-tecla');
        playSound(nota);
    });
});