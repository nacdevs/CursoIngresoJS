/*Tomar los datos de los cuadrados de texto y formar la frase "Yo soy xxxx vivo en la localidad xxxxx y estudio en la UTN"

*/

function mostrar()
{
  var nombre;
  var localidad;

  nombre=document.getElementById('elNombre').value;
  localidad=document.getElementById('laLocalidad').value;

  alert("Yo soy "+nombre+ ", vivo en la localidad de "+localidad+" y estudio en la UTN");
}
