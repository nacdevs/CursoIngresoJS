/*Al comenzar el juego generaremos un número
RANDOM del 1 al 3 para la selección de la máquina,
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	alert(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina) {
			case 1:
				alert("empato");
			break;
			case 2:
				alert("perdio")
				break;
			case 3:
				alert("gano")
				break;


	}

}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina) {
			case 1:
				alert("gano");
			break;
			case 2:
				alert("empato")
				break;
			case 3:
				alert("perdio")
				break;


	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina) {
			case 1:
				alert("perdio");
			break;
			case 2:
				alert("gano")
				break;
			case 3:
				alert("empato")
				break;


	}

}//FIN DE LA FUNCIÓN
