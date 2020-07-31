/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var promedio;


	respuesta="si";
	acumulador=0;
	contador=0;

	while(respuesta=="si")
		

	{
		numeroIngresado= prompt ("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		 acumulador =acumulador+numeroIngresado;
		
		contador=contador+1
		respuesta = prompt("¿Desea ingresar otro numero? si/no");
				
	}

	promedio =acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
//contador++; contador= contador +1; contador+=1;otras formas;
/*acumulador +=numeroIngresado;*/
//respuesta = confirm ("¿Desea ingresar otro numero? si/no");
}//FIN DE LA FUNCIÓN