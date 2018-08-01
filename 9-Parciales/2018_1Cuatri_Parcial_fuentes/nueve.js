function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta="si";
	var temperaturaPar=0;
	var pesoMaximo=0;
	var pesoMinimo;
	var marcaMasPesada;
	var productoBajoCero=0;
	var bandera=0;
	var sumaPesos=0;
	var cantidad=0;
	var promedio;
	

	while(respuesta!="no"){
			marca=prompt("Ingrese marca");
			peso=prompt("Ingrese peso");
			peso=parseInt(peso);

			while(isNaN(peso)&&(peso<1 || peso >100)){		
				peso=prompt("El peso debe estar entre 1 y 100");
				peso=parseInt(peso);		
			}

			temperatura=prompt("Ingrese temperatura");
			temperatura=parseInt(temperatura);

			while(isNaN(temperatura) &&(temperatura<-30 || temperatura >30)){		
				temperatura=prompt("La temperatura debe estar entre -30 y 30");
				temperatura=parseInt(temperatura);		
			}


			if((temperatura%2)==0){
				temperaturaPar++;
			}

			if(peso>pesoMaximo){
				pesoMaximo=peso
				marcaMasPesada=marca;
			}

			if(temperatura<0){
				productoBajoCero++;
			}

			if(bandera==0){
				pesoMinimo=peso;
				bandera++;
			}
			if(pesoMinimo>peso){
				pesoMinimo=peso;
			}
			sumaPesos=sumaPesos+peso;
			cantidad++;
			respuesta=prompt("Desea continuar?");


	}

	promedio=sumaPesos/cantidad;
	document.write("La cantidad de temperaturas pares: "+temperaturaPar+"<br>");
	document.write("La marca del producto más pesado: "+marcaMasPesada+"<br>");
	document.write("La cantidad de productos que se conservan a menos de 0 grados:"+productoBajoCero+"<br>");
	document.write("El promedio del peso de todos los productos: "+promedio+"<br>");
	document.write("El peso maximo: "+pesoMaximo+ "y el peso minimo: "+pesoMinimo);





}
