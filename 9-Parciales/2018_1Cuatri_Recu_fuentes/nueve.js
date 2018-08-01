/*
OSO 800 15
OSO POLAR 900 -15
FOCA 300 26
PEROO 40 25
PINGÜINO 25 -30
*/


function mostrar()
{
	var nombre;
	var temperatura;
	var peso;
	var contadorTempPar=0;
	var contadorBajoCero=0;
	var PesoMax=0;
	var NombrePesoMax;
	var temperaturaPesoMax;
	var SumaTotal=0;
	var cantidad=0;
	var pesoMaxBajoCero=0;
	var pesoMinBajoCero=0;
	var respuesta="si";

	while(respuesta!="no"){
		nombre= prompt("Ingrese nombre");			

		peso= prompt("Ingrese peso");
		peso= parseInt(peso);

		while(peso<1 || peso>1000){
			peso=prompt("El peso debe estar entre 1 y 1000");
			peso=parseInt(peso);
		}

		temperatura= prompt("Ingrese temperatura");
		temperatura= parseInt(temperatura);

		while(temperatura<-30 || temperatura>30){
			temperatura=prompt("La temperatura debe estar entre -30 y 30");			
			temperatura=parseInt(temperatura);
			}	


		if(temperatura%2==0){
			contadorTempPar++;
		}

		if(PesoMax<peso){
			PesoMax=peso;
			NombrePesoMax=nombre;
			temperaturaPesoMax=temperatura;
		}

		if(temperatura<0){
			contadorBajoCero++;
			if(pesoMaxBajoCero<peso){
				pesoMaxBajoCero=peso;
			}
			if(pesoMinBajoCero>peso){
				pesoMinBajoCero=peso;
			}else{
				pesoMinBajoCero=pesoMaxBajoCero;
			}
		}

		SumaTotal=SumaTotal+peso;
		cantidad++;
		respuesta=prompt("Desea continuar");
	}
	promedio=SumaTotal/cantidad;

	document.write("La cantidad de temperaturas pares es: "+contadorTempPar+"<br> El animal mas pesado es: "+NombrePesoMax+", pesa:"+PesoMax+" y su temperatura es: "+temperaturaPesoMax+"<br>");
	document.write("La cantidad de animales que viven bajo cero es: "+contadorBajoCero+"<br>El promedio de peso es: "+promedio+"<br>");
	document.write("El peso maximo de los animales que pueden vivir bajo cero es: "+pesoMaxBajoCero+" y el minimo: "+pesoMinBajoCero);



}
