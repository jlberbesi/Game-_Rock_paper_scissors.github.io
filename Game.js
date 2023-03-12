function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // este algoritmo me genera un número random.
}

let jugador = 0;
const pc = aleatorio(1, 3); // Acá se invoca a la función.

// eslint-disable-next-line no-alert
jugador = prompt('Elige 1 para piedra, 2 para papel, 3 para tijera');
// alert("elegiste " + jugador);

// los condicionales

if (jugador === 1) {
  alert('Elegiste piedra');
} else if (jugador === 2) {
  alert('Elegiste papel');
} else if (jugador === 3) {
  alert('Elegiste tijera');
} else {
  alert('Jugada inválida');
}

if (pc === 1) {
  alert('PC elije piedra');
} else if (pc === 2) {
  alert('PC elije papel');
} else if (pc === 3) {
  alert('PC elije tijera');
} else {
  alert('Jugada inválida');
}

if (pc === jugador) {
  alert('Empate');
} else if (jugador === 1 && pc === 3) {
  alert('Ganaste');
} else if (jugador === 2 && pc === 1) {
  alert('Ganaste');
} else if (jugador === 3 && pc === 2) {
  alert('Ganaste');
} else {
  alert('Perdiste');
}