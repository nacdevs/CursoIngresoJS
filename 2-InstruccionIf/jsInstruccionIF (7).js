function mostrar()
{
//tomo la edad  
	var edad;
	var estCivil;
	estCivil=document.getElementById('estadoCivil').value;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad<18 && estCivil!="Soltero"){
		alert('Es muy pequeño para NO ser soltero');
	}else{

	}
	


}//FIN DE LA FUNCIÓN