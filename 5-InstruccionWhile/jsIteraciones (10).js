function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var contadorPos=0;
	var contadorNeg=0;
	var contadorCero=0;
	var SumaPos;
	var SumaNeg;
	var respuesta="si";

	while(respuesta!="no")
	{	
		contador++;
		var numeroIngresado = prompt("Ingrese numero");
		respuesta = prompt("Quiere continuar??");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(numeroIngresado>0){
			SumaPos=SumaPos+numeroIngresado;
			contadorPos++;
		}

		if (numeroIngresado<0) {
			SumaNeg=SumaNeg+numeroIngresado;
			contadorNeg++
		}else{
			contadorCero++
		}
			/////CONTINUARA ALGUN DIA

	}




}//FIN DE LA FUNCIÓN