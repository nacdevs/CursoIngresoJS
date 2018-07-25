function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';


	while(respuesta=='si'){
		var numero= prompt ("Ingrese valor");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta = prompt ("Quiere continuar?");
		contador++
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN