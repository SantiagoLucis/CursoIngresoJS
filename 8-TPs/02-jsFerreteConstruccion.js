/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var radio;
	var resultado;
	var areaRectangulo;

	var largo=txtIdLargo.value;
	var ancho=txtIdAncho.value;
	var radio=txtIdRadio.value;

	var largo=parseInt(largo);
	var ancho=parseInt(ancho);
	var radio=parseInt(radio);

	areaRectangulo= largo*ancho;
	resultado= areaRectangulo*3;

	alert("la cantidad necesaria es de " + resultado +" alambres");
}
function Circulo () 
{
	var radio;
	var resultado;
	var areaCirculo;

	var radio=txtIdRadio.value;
	var radio=parseInt(radio);
	areaCirculo= (2 * radio) * Math.PI ;
	resultado=areaCirculo*3;

	alert("la cantidad necesaria es de "+resultado+" alambres");
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var contrapiso;
	var cemento;
	var cal;

	var largo=txtIdLargo.value;
	var ancho=txtIdAncho.value;
	
	var largo=parseInt(largo);
	var ancho=parseInt(ancho);

	area=largo*ancho;
	contrapiso=area/2;
	cemento=contrapiso*2;
	cal=contrapiso*3;

	alert("la cantidad necesaria es de "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}