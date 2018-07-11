/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ancho;
	var largo;
	var perimetro;

	ancho= document.getElementById('Ancho').value;
	largo= document.getElementById('Largo').value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro= (ancho+largo)*2;
	perimetro= perimetro*3;

	alert("Cantidad de alambre necesario "+perimetro);



}
function Circulo () 
{
	var radio;

	radio= document.getElementById('Radio').value;
	radio=parseInt(radio);
	perimetro=(3.1416*radio);
	perimetro=perimetro*3;

	alert("Cantidad de alambre necesario "+perimetro);



}
function Materiales () 
{
	var ancho;
	var largo;
	var perimetro;
	var bolsaCemeneto;
	var bolsaCal;

	ancho= document.getElementById('Ancho').value;
	largo= document.getElementById('Largo').value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	bolsaCemeneto=(ancho*largo);
	bolsaCal=(ancho*largo);
	bolsaCemeneto=2*(bolsaCemeneto);
	bolsaCal=3*(bolsaCal);

	alert("bolsa cemento: "+bolsaCemeneto);
	alert("bolsa cal: "+bolsaCal);


	
}