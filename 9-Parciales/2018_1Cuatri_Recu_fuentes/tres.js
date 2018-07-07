function mostrar()
{
	var precio;
	var descuento;
	var precioConDescuento;
	var precioFinal;
	var iva;

		

	precio=prompt("Ingrese el precio");
	descuento = prompt("Ingrese el descuento");

	precio=parseInt(precio);
	descuento=parseInt(descuento); 

	precioConDescuento= precio - (precio*(descuento * (1/100)));
	iva= precioConDescuento*0.21;
	precioFinal= precioConDescuento +  iva;

	alert("El precio es: "+precio+", el descuento es: "+descuento+", el iva es: "+iva);
	document.getElementById('elPrecioFinal').value=precioFinal;

}
