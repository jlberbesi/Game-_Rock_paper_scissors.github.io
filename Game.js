let jugador = 0;
let pc = 3;

jugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijera");

//alert("elegiste " + jugador);

if (jugador == 1) {
    alert("Elegiste piedra")
} else if (jugador == 2){
    alert("Elegiste papel")
} else if (jugador == 3){
    alert("Elegiste tijera")
} else {
    alert("Jugada inválida")
}
if (pc == 1){
   alert("PC Elige piedra") 
} else if ( pc == 2){
    alert("PC Elige papel")
} else if (pc == 3){
    alert("PC Elige tijera")
}

// Combate
if (pc == jugador) {
    alert("Empate")
} else if (jugador == 1 && pc == 3){
    alert("Ganaste")
} else if (jugador == 2 && pc == 1){
    alert("Ganaste")
} else {
    alert("PERDISTE")
}
