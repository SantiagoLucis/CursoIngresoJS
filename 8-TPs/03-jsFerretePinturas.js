/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var centígrados;
	var resultadoFC;

	var fahrenheit=txtIdTemperatura.value;
	var centígrados=txtIdTemperatura.value;

	var fahrenheit=parseInt(fahrenheit);
	var centígrados=parseInt(centígrados);

	resultadoFC=(centígrados-32)/1.8;


	alert(+fahrenheit+ " Fahrenheit son " +resultadoFC+ " Centígrados");


	
}

function CentigradosFahrenheit () 
{
	var fahrenheit;
	var centígrados;
	var resultadoCF;

	var fahrenheit=txtIdTemperatura.value;
	var centígrados=txtIdTemperatura.value;

	var fahrenheit=parseInt(fahrenheit);
	var centígrados=parseInt(centígrados);

	resultadoCF=fahrenheit*1.8+32;

	alert(+centígrados+ " Centígrados son " +resultadoCF+ " Fahrenheit");
	

}
