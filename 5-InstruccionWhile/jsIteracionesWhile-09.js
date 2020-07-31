/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero=1;//una bandera es una variable que determina si en el programa paso algo o no(guarda un estado, en lo general. verdadero o falso);
	respuesta="si";
	while(respuesta=="si")
	{
		numeroIngresado= prompt ("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == 1 || numeroIngresado>numeroMaximo)
		 {
		 	numeroMaximo= numeroIngresado;
		 }

		 if (banderaDelPrimero == 1 || numeroIngresado<numeroMinimo)
		  {
		  	numeroMinimo=numeroIngresado;
		  }

		  banderaDelPrimero=0;
		  //la forma de arriba es mas corto, compacto y usa menos renglones.. y ademas funciona en casi todos los lenguajes, la estructura algoritmica es la misma siempre.
		/*if (banderaDelPrimero==1) 
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero=0;
		}
		else
		{

		if (numeroIngresado>numeroMaximo)
		 {
		 	numeroMaximo= numeroIngresado;
		 }

		 if (numeroIngresado<numeroMinimo)
		  {
		  	numeroMinimo=numeroIngresado;
		  }
		} */


		
		respuesta = prompt("¿Desea ingresar otro numero? si/no");	
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN