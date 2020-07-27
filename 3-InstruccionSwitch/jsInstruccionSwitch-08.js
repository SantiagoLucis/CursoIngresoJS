function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("hace FRIO");
			break;
		default:
			alert("hace CALOR");
			break;
	}
}//FIN DE LA FUNCIÓN