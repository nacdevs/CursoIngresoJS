function mostrar()
{
	var numeroIngresado;
	var numerosAnteriores;
	var contadorDeDivisores;
	var numerosRecorridos;





	numeroIngresado=prompt('Ingrese nùmero');
	numeroIngresado=parseInt(numeroIngresado);

	for(numerosRecorridos=numeroIngresado; numerosRecorridos>1 ; numerosRecorridos--){

	contadorDeDivisores=0;
	for(numerosAnteriores=numeroIngresado-1; numerosAnteriores>1; numerosAnteriores--){

		if(numeroIngresado%numerosAnteriores==0){
			contadorDeDivisores++
		}

	}

	if(contadorDeDivisores==0){
		console.log("Es primo");
	}else{
		console.log("No es primo");
	}
	}

}//FIN DE LA FUNCIÓN