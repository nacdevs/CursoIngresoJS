function mostrar()
{
	var numeroRecorrido;
	var respuesta;

	for(numeroRecorrido=0;numeroRecorrido>10;numeroRecorrido++){
		respuesta=prompt("Ingrese numero");
		respuesta=parseInt(respuesta);
		console.log(respuesta)
		if(numeroRecorrido==9){
			break;
		}
	}



}//FIN DE LA FUNCIÓN