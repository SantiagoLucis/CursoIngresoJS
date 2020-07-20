function mostrar()
{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;

	if (edad>17) 
	{
		alert(" sos mayor ");
	}
	
	if (edad<18)
{
	alert(" sos menor ");
}
}//FIN DE LA FUNCIÓN

// else es para usar menos el microprocesador y reemplaza el segundo if(cada if usa una vez el microprocesador)
//otra forma de hacerlo;
/*{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;

	if (edad>17) 
	{
		alert(" sos mayor ");
	}
	
	else (edad<18)
{
	alert("sos menor");
}
}*/