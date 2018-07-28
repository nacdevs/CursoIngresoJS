/*
Maria F 15
Jose  M 33
Fer   F 25

sexo validacion por F o M 
edad validacion por is NaN y mayor que 0 menor a 100

*/



function mostrar()
{
	var nombre;
	var edad=0;
	var sexo;
	var apellido;	
	var contador=0;	
	var cantidadMasc=0;
	var cantidadFem=0;
	var cantidadMenor=0;
	var cantidadMayor=0;
	var mujerMayor=0;
	var mujerMenor=0;
	var varonMenor=0;
	var varonMayor=0;
	/// Ejercicio 2
	var promedioTotalEdad;
	var promedioMujeres;
	var promedioVarones;
	/// Ejercicio3
	var sumaEdadVarones=0;
	var sumaEdadMujeres=0;
	var sumaEdad=0;
	/// Ejercicio4 Terminar ejercicio 4 y 5 
	var nombreMayor;
	var nombreMenor;
	var mujerMayorNombre;


	while(contador<3){
		nombre=prompt("Ingrese nombre");
		sexo=prompt("Ingrese sexo");

		while(sexo!="f" && sexo!="m"){
			sexo=prompt("Ingrese sexo por f o m");
		}
	
				


		edad=prompt("Ingrese edad");	


		while(isNaN(edad) && (edad>0 && edad<100)){
			edad=prompt("Ingrese edad");
		}
		edad=parseInt(edad);		

		sumaEdad=sumaEdad+edad;

		if(edad>18){
			cantidadMayor++;
			//Ejercicio2
			if(sexo=="f"){
				mujerMayor++;
				cantidadFem++;
				sumaEdadMujeres=sumaEdadMujeres+edad;
			}else{
				varonMayor++;
				cantidadMasc++;
				sumaEdadVarones=sumaEdadVarones+edad;
			}

		}else{
			if(sexo=="f"){
				mujerMenor++;
				//Ejercicio 3
				cantidadFem++;
				sumaEdadMujeres=sumaEdadMujeres+edad;
			}else{
				varonMenor++;			
				cantidadMasc++;
				//ejercicio3
				sumaEdadVarones=sumaEdadVarones+edad;
			}
			cantidadMenor++;
		}



/*		REPITIENDO IF DE MAS 	if (sexo == "f") {
			cantidadFem++;
			//ejercicio3
			sumaEdadMujeres=sumaEdadMujeres+edad;
		}else{
			cantidadMasc++;
			//ejercicio3
			sumaEdadVarones=sumaEdadVarones+edad;
		}
*/


		contador++;
		
	}
	//cantidadMenor=
	promedioTotalEdad=(sumaEdadVarones+sumaEdadMujeres)/contador;
	promedioVarones=sumaEdadVarones/cantidadMasc;
	promedioMujeres=sumaEdadMujeres/cantidadFem;




//ej1	document.write("cantidad mujeres: "+ cantidadFem + "<br> cantidad varones: "+cantidadMasc+"<br> cantidad menores: "+cantidadMenor+"<br> cantidad mayores: "+cantidadMayor);
//ej2      document.write("mujeres mayores: "+mujerMayor+"<br> varones mayores: "+varonMayor+"<br> mujeres menores:"+mujerMenor+"<br> varones menores: "+varonMenor);
//Ej3	document.write("Promedio Total: "+promedioTotalEdad+"<br> Promedio Varones: "+promedioVarones+"<br> Promedio Mujeres: "+promedioMujeres);

}
