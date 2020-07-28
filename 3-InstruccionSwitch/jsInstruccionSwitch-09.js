function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	
	tarifaDeViajes=15000
	aumento20porciento=tarifaDeViajes*1.20;
	descuento10porciento=tarifaDeViajes-(tarifaDeViajes*0.10);
	descuento20porciento=tarifaDeViajes-(tarifaDeViajes*0.20);
	aumento10porciento=tarifaDeViajes*1.10;


	switch(estacionIngresada)
	{
		case "Invierno":		

		switch(destinoIngresado)
		{ 
			case "Bariloche":
				alert ("Su precio final es de " +aumento20porciento);
				break;
			case "Cataratas":
			case "Cordoba":
				alert("Su precio final es de "+descuento10porciento);
				break;
			default:
				alert("Su precio final es de "+descuento20porciento);
				break;
		}
		break;		 
			case "Verano":

			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Su precio final es de "+descuento20porciento);
					break;
				case "Cataratas":
				case "Cordoba":
					alert("Su precio final es de "+aumento10porciento);
					break;
				default:
					alert("Su precio final es de "+aumento20porciento);
					break;
			}
			break;
				case "Otoño":
				case "Primavera":

				switch(destinoIngresado)
				{									
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						alert("Su precio final es de "+ aumento10porciento);
						break;
					default:
						alert("Su precio final es de "+ tarifaDeViajes);
						break;
				}
			break;
	}			
}//FIN DE LA FUNCIÓN