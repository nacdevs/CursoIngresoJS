/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
	var numeroA;
	var numeroB;
	var numOp;
	var op;

	numeroA = Math.floor((Math.random() * 10) + 1);
	numeroB = Math.floor((Math.random() * 10) + 1);
	numOp= Math.floor((Math.random() * 4) + 1);

	op=[+,-];

	alert(op);

	op[numOp];
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
