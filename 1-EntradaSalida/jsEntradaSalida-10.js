/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;

	var importe=txtIdImporte.value;
	var importe=parseInt(importe);

	var descuento=importe*0.75;

	txtIdResultado.value=descuento;

	/* otra forma

	var importe;
	var descuento;
	var resultado;

	var importe=txtIdImporte.value;
	var importe=parseInt(importe);

	descuento=importe*25/100;
	resultado=importe - descuento;

	txtIdResultado.value=resultado;*/

}
