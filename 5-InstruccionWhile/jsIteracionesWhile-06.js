function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0; //empieza en 0 sino muetras NaN;
	/*txtIdSuma
	txtIdPromedio*/
	while(contador<5)
	{
		numeroIngresado = prompt ("ingrese un numero: ");
		numeroIngresado =parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1 //contador++;
	}

	promedio = acumulador/contador; 

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN
/*acumulador ejemplo sube, tiene un incremento variable.. depende del valor ingresado
el contador tiene una variable y un fijo. el acumulador tiene dos partes variables;
*/