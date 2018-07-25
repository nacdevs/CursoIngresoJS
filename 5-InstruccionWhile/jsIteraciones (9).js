/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo.
*/

function mostrar()
{

	var contador=0;
	// declarar variables
	var numeroMaximo;
	var numeroMinimo;
	var respuesta='si';

	while(respuesta!='no')
	{	
		contador++;
		var numeroIngresado = prompt("Ingrese numero");
		respuesta = prompt("Quiere continuar??");
		numeroIngresado=parseInt(numeroIngresado);
		if(contador==1){
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		}else{		
			if(numeroIngresado>numeroMaximo){
			numeroMaximo=numeroIngresado;
			}

			if(numeroIngresado<numeroMinimo){
			numeroMinimo=numeroIngresado;
			}

		}
	
	}


	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN