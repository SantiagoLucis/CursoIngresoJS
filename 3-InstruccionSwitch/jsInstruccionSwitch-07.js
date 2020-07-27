function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("se encuentra al Oeste");
			break;
		case "Cataratas":
			alert("se encuentra al Norte");
			break;
		case "Mar del plata":
			alert("se encuentra al Este");
			break;
		default:
			alert("se encuentra al Sur");
			break;
	}
}//FIN DE LA FUNCIÓN