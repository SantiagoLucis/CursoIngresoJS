/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

	var precio1=txtIdPrecioUno.value;
	var precio2=txtIdPrecioDos.value;
	var precio3=txtIdPrecioTres.value;

	var precio1=parseInt(precio1);
	var precio2=parseInt(precio2);
	var precio3=parseInt(precio3);

	resultado=precio1+precio2+precio3;

	alert ("la suma de los mismos es de " + resultado);
	
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;
	var promedio;

	var precio1=txtIdPrecioUno.value;
	var precio2=txtIdPrecioDos.value;
	var precio3=txtIdPrecioTres.value;

	var precio1=parseInt(precio1);
	var precio2=parseInt(precio2);
	var precio3=parseInt(precio3);

	resultado=precio1+precio2+precio3;
	promedio=resultado/3;



	alert ("el promedio de los mismos es de " + promedio);
}
function PrecioFinal () 
{

	var precio1;
	var precio2;
	var precio3;
	var resultado;
	var IVA;

	var precio1=txtIdPrecioUno.value;
	var precio2=txtIdPrecioDos.value;
	var precio3=txtIdPrecioTres.value;

	var precio1=parseInt(precio1);
	var precio2=parseInt(precio2);
	var precio3=parseInt(precio3);

	resultado=precio1+precio2+precio3;
	IVA=resultado*1.21;

	alert("el precio final es de " + IVA);



	
}