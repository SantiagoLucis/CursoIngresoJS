/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var contadorPositivos=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var contadorNegativos=0;
	var contadorPares=0;
	var contadorCeros=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado= prompt ("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		 acumulador =acumulador+numeroIngresado;
		
		contador=contador+1
		respuesta = prompt("¿Desea ingresar otro numero? si/no");
		if (numeroIngresado<0) 
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
		}
	}//fin del while. NO ESTA TERMINADO

	//document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN