function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var contadorPos=0;
	var contadorNeg=0;
	var contadorCero=0;
	var contadorPar=0;
	var contadorImpar=0;
	var promedioPositivos;
	var promedioNegativos;
	var SumaPos=0;
	var SumaNeg=0;
	var diferencia;
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
			if(numeroIngresado % 2 == 0){
				contadorPar++;
			}
		}

		if (numeroIngresado<0) {
			SumaNeg=SumaNeg+numeroIngresado;
			contadorNeg++

			if(numeroIngresado % 2 == 0){
				contadorPar++;
			}

		}else{
			if(numeroIngresado==0){
				contadorCero++;	
				contadorPar++;
			}
			
		}
			/////CONTINUARA ALGUN DIA

	}

	promedioPositivos=SumaPos/contadorPos;
	promedioNegativos=SumaNeg/contadorNeg;
	diferencia=SumaPos-SumaNeg;

	document.write('<h1 style="font-family:Arial;">Resultados</h1><br>'+"Suma de Negativos: "+SumaNeg+"<br>"+"Suma de Positivos: "+SumaPos+"<br> Cantidad de positivos: "+contadorPos+"<br>");
	document.write("Cantidad Negativos: "+ contadorNeg+"<br>"+"Cantidad Ceros: "+ contadorCero+ "<br>"+"Cantidad de num pares: "+contadorPar+"<br>")	;
	document.write("Promedio de positivos: "+ promedioPositivos+"<br>"+"Promedio de negativos: "+ promedioNegativos+"<br>"+"Diferencia entre positivos y negativos: "+diferencia);





}//FIN DE LA FUNCIÓN