var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var GanadasBox;
var PerdidasBox;
var EmpatadasBox;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	//alert(eleccionMaquina);

	GanadasBox=document.getElementById('ganadas');
	PerdidasBox=document.getElementById('perdidas');
	EmpatadasBox=document.getElementById('empatadas');


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina) {
			case 1:
				mensaje="empato";
				ContadorDeEmpates++;
			break;
			case 2:
				mensaje="perdio";
				ContadorDePerdidas++;
				break;
			case 3:
				mensaje="gano";
				ContadorDeGanadas++;
				break;

}
alert(mensaje);
mostrarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina) {
			case 1:
				mensaje="gano";
				ContadorDeGanadas++;
			break;
			case 2:
				mensaje="empato";
				ContadorDeEmpates++;
				break;
			case 3:
				mensaje="perdio";
				ContadorDePerdidas++;
				break;

	}
alert(mensaje);
mostrarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina) {
			case 1:
				mensaje="perdio";
				ContadorDePerdidas++;
			break;
			case 2:
				mensaje="gano";
				ContadorDeGanadas++;
				break;
			case 3:
				mensaje="empato";
				ContadorDeEmpates++
				break;
	}
alert(mensaje);
mostrarResultado();

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	GanadasBox.value=ContadorDeGanadas;
	PerdidasBox.value=ContadorDePerdidas;
	EmpatadasBox.value=ContadorDeEmpates;

}
