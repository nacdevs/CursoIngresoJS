function mostrar()
{

	var contador=0;
	var acumulador=0;
	

	while(contador<5){
		var numero;
		numero= prompt('Ingrese numero');
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador++
	}



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN