/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio ()
{
  var marcaLampara;
  var cantidadLamparas;
  var precioLampara=35; // El precio original unitario es igual para todas las lamparas
  var precioConDescuento;
  var precioTotalConDescuento;

  //Le doy valor a las variables marcaLampara y cantidadLamparas
  marcaLampara=document.getElementById("Marca").value;
  cantidadLamparas=document.getElementById("Cantidad").value;
  cantidadLamparas=parseInt(cantidadLamparas);


  //Veo cada caso por cantidad de Lamparas
  switch(cantidadLamparas){
    case 6:
        /* precio de lampara= precio original unitario - (el precio original untario POR el porcentaje de descuento)
           precioconDescuento = precio de lampara con descuento POR la cantidad   */
        precioConDescuento=((precioLampara-(precioLampara*0.5)) * cantidadLamparas);
    break;

    case 5:
    if (marcaLampara=="ArgentinaLuz") {
        precioConDescuento=((precioLampara-(precioLampara*0.4)) * cantidadLamparas);
    }else {
        precioConDescuento=((precioLampara-(precioLampara*0.3)) * cantidadLamparas);
    }
      break;


    case 4:
      if (marcaLampara=="ArgentinaLuz"||marcaLampara=="FelipeLamparas") {
          precioConDescuento=((precioLampara-(precioLampara*0.25)) * cantidadLamparas);
      }else {
          precioConDescuento=((precioLampara-(precioLampara*0.2)) * cantidadLamparas);
      }
      break;


    case 3:
      if (marcaLampara=="ArgentinaLuz") {
        precioConDescuento=((precioLampara-(precioLampara*0.15)) * cantidadLamparas);
      }else {
      if(marcaLampara=="FelipeLamparas"){
          precioConDescuento=((precioLampara-(precioLampara*0.10)) * cantidadLamparas);
      }else {
          precioConDescuento=((precioLampara-(precioLampara*0.05))* cantidadLamparas);
      }
    }
      break;


  }

  ///Chequeo si pasa los 120p
      if (precioConDescuento>120) {
        var impuesto=precioConDescuento*0.1;
        precioConDescuento=(precioConDescuento+impuesto);
        alert("Usted pago "+impuesto+" de IIBB.");
      }

      document.getElementById("precioDescuento").value=precioConDescuento;

}
