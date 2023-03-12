let jugador = 0;
let pc = 2;

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
