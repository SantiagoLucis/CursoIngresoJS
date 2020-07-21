function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;

	numeroAleatorio = Math.floor((Math.random() * 10) +1);

	if (numeroAleatorio>8)
{
		alert ("EXCELENTE");
}
	else
{
		if (numeroAleatorio>3)
{
		alert("APROBO");
}
		else
{
		alert("Vamos, la proxima se puede");
}
}
}//FIN DE LA FUNCIÓN

/*
{	
	var numeroAleatorio;
	var mensaje;

	numeroAleatorio = Math.floor((Math.random() * 10) +1);

	if (numeroAleatorio>8)
{
		mensaje = "EXCELENTE" ;
}
	else
{
		if (numeroAleatorio>3)
{
		mensaje = "APROBO" ;
}
		else
{
		mensaje= "Vamos, la proxima se puede" ;
}
}
		alert(mensaje);
}
FORMA PARA USAR 1 SOLO ALERT
*/