function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>=18 || edad<=12){
		alert('No es adolescente');
	}



}//FIN DE LA FUNCIÓN