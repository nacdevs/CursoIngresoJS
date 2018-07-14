function mostrar()
{
	var numA;
	var numB;
	var suma;

	numA=prompt("ingrese el primer numero");
	numB=prompt("ingrese el segundo numero");
	
  
	if(numA==numB){
		alert(numA+numB);
	}

	numA=parseInt(numA);
	numB=parseInt(numB);

	if(numA>numB){		
		alert(numA/numB);
	}else{
		suma=numA+numB
		if(50>suma){
			alert("la suma es : "+ suma + " y es menor a 50");
		}
	}




}
