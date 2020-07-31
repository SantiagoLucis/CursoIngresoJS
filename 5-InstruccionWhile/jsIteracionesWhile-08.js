/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var acumulador
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while(respuesta=="si")
		

	{
		numeroIngresado= prompt ("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		while (numeroIngresado==0)
		{
			numeroIngresado= prompt ("Error.. Re-Ingrese un numero: ");
			numeroIngresado = parseInt(numeroIngresado);
		}


		acumulador =acumulador+numeroIngresado;
		
		contador=contador+1
		respuesta = prompt("¿Desea ingresar otro numero? si/no");
				
		
	if (numeroIngresado>0) 
	{
		sumaPositivos=sumaPositivos+numeroIngresado;
	}
	else
	{
		multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
	}
	}
	if (multiplicacionNegativos==1) 
	{
		multiplicacionNegativos="No se ingresaron numeros negativos";
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN