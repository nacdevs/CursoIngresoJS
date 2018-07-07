/*
Ejercicio de parcial de practica:
Se ingresan tres numeros, se muestra la suma de los tres, el promedio de los tres y la resta de los tres en unico alert


*/
function mostrar()
{
	/*var base;
	var altura;
	var superficie;
	var perimetro;

	base= prompt("Introduzca la base");
	altura= prompt("Introduzca la altura");

	base=parseInt(base);
	altura=parseInt(altura);

	superficie= (base*altura)/2;
	perimetro= (base*3);

	alert("La superficie es "+superficie+" y el perimetro es "+perimetro);*/

	var numero1;
	var numero2;
	var numero3;
	var suma;
	var promedio;
	var resta;

	numero1=prompt("Ingrese numero uno");
	numero2=prompt("Ingrese numero dos");
	numero3=prompt("Ingrese numero tres");

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	numero3=parseInt(numero3);

	suma= numero1+numero2+numero3;
	resta= numero1-numero2-numero3;
	promedio = suma/3;

	alert("La suma es "+suma+" la resta es "+resta+" y el promedio es "+promedio);

}
