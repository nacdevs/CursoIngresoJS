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
	var op2;

	numeroA = Math.floor((Math.random() * 10) + 1);
	numeroB = Math.floor((Math.random() * 10) + 1);
	numOp= Math.floor((Math.random() * 4) + 0);

	op=['+','-','*','/'];
	op2=op[numOp];

	document.getElementById('PrimerNumero').value=numeroA;
	document.getElementById('SegundoNumero').value=numeroB;
	document.getElementById('Operador').value=op2;


	switch(op2){
		case '+':
			respuesta = numeroA+numeroB;			
			break;

		case '-':
			respuesta = numeroA-numeroB;
			break;
		
		case '/':
			respuesta = numeroA/numeroB;
			break;

		case '*':
			respuesta = numeroA*numeroB;
			break;		
	}

}//FIN DE LA FUNCIÓN


function Responder()
{
	var userResp;

	userResp=document.getElementById('Respuesta').value;
	userResp=parseInt(userResp);
	
	if(userResp==respuesta){
		alert("correcto");
	}else{
		alert("incorrecto, la respuesta es: "+respuesta)
	}

}//FIN DE LA FUNCIÓN
