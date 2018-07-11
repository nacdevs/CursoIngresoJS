function mostrar()
{
//tomo la edad  
var edad;
	var estCivil;
	estCivil=document.getElementById('estadoCivil').value;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad<18 && estCivil!="Soltero"){
		
	}else{
		if(estCivil=="Soltero" && edad>=18){
			alert('Es soltero y no es menor')

			}
		}
	


}//FIN DE LA FUNCIÓN