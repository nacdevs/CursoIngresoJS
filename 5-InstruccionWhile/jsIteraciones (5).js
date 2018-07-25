function mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo!="f" && sexo!= "m"){
		 sexo = prompt("ingrese f ó m .");
	}












// esto no hace falta nestor pedazo de gilastrun
	if(sexo=="f"){
		document.getElementById('Sexo').value="femenino";
	}else{
		document.getElementById('Sexo').value="masculino";
	}

	//document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN