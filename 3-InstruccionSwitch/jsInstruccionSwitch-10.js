function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;

	switch (estacionIngresada)
	{
		case "invierno":

			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
				
			}
	}//no se porque no funciona, a corregir;
}//FIN DE LA FUNCIÓN