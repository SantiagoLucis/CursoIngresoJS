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
	/*{
		var ingresosbrutos;
		var precioFinal;
		var IIBB;
		var cantidadLamparas;
 		var precioUnitario;
 		var marcaLamparas;
 		var precioConDescuento;
 		precioUnitario=35;

 		cantidadLamparas=txtIdCantidad.value;
 		marcaLamparas=Marca.value;
		cantidadLamparas=parseInt(cantidadLamparas);
 		precioTotal=precioUnitario*cantidadLamparas;
 		txtIdprecioDescuento.value=precioTotal;

 		if (cantidadLamparas>5)
 		{
 			txtIdprecioDescuento.value=precioTotal * 50/100;
 		}
 			else 
 			{
 			if (cantidadLamparas == 5)
 			{
 				
 				if (marcaLamparas == "ArgentinaLuz")
 				{
 					precioConDescuento=precioTotal * 40/100;
 					precioFinal=precioTotal - precioConDescuento;
 					txtIdprecioDescuento.value=precioFinal;
 				}
 				else
 				{
 					if (marcaLamparas != "ArgentinaLuz")
 					{
 						precioConDescuento=precioTotal *30/100;
 						precioFinal=precioTotal- precioConDescuento;
 						txtIdprecioDescuento.value=precioFinal;
					}
 				}
			}
						if (cantidadLamparas == 4) 
						{
							if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas") 
							{
								precioConDescuento=precioTotal *25/100;
								precioFinal=precioTotal- precioConDescuento;
 								txtIdprecioDescuento.value= precioFinal;
							}
							else 
							{																
									precioConDescuento = precioTotal *20/100;
									precioFinal=precioTotal- precioConDescuento;
 									txtIdprecioDescuento.value = precioFinal;						
							}
						}
							if (cantidadLamparas == 3) 
							{
								if (marcaLamparas == "ArgentinaLuz") 
								{
									precioConDescuento = precioTotal *15/100;
									precioFinal=precioTotal- precioConDescuento;
									txtIdprecioDescuento.value = precioFinal;
								}
								else
								{
									if (marcaLamparas == "FelipeLamparas") 
									{
										precioConDescuento = precioTotal *10/100;
										precioFinal=precioTotal- precioConDescuento;
										txtIdprecioDescuento.value = precioFinal;
									} 

									else  
									{
										precioConDescuento=precioTotal*5/100;
										precioFinal=precioTotal- precioConDescuento;
										txtIdprecioDescuento.value=precioFinal;
									}
								}																		
							}
			}
			if (precioFinal > 120) 
			{
				ingresosbrutos = precioFinal * 0.1;
				IIBB = precioFinal+ingresosbrutos;
				alert ("Usted pago " + IIBB + " agregando el IIBB");		
			}
	}
	FORMA CON IF ABAJO SWITCH*/

{
	var cantidadLamparas;
	var marcaLamparas;
	var precioBruto;
	var descuentoCalculado;
	var porcentaje;
	var precioFinal;
	var aumentoIIBB;

	cantidadLamparas=txtIdCantidad.value;
	cantidadLamparas=parseInt(cantidadLamparas);
	marcaLamparas=Marca.value;
	precioBruto=cantidadLamparas*35;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=15;
					break;
				case "FelipeLamparas":
					porcentaje=10;
					break;
				default:
					porcentaje=5;
					break;
			}
			break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
					break;
				default:
					porcentaje=20;
					break;
			}
			break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
			break;
		default:
			porcentaje=50;
			break;
	}

	descuentoCalculado=precioBruto*porcentaje/100;
	precioFinal=precioBruto- descuentoCalculado;
	aumentoIIBB=0;
	if (precioFinal>120)
	 {
	 	aumentoIIBB=precioFinal*10/100;
	 	alert ("Useted paga "+aumentoIIBB+" de IIBB.");
	 }
	 txtIdprecioDescuento.value=precioFinal+aumentoIIBB;
}

