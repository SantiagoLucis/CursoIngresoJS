function mostrar()
/*{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;

	if (edad <= 12) 
{ 
		alert("no sos adolescente");
}

	if (edad >= 18)
{ 
		alert("no sos adolescente");
}

	
}*/
//FIN DE LA FUNCIÓN
//if (0) (false) son los unicos que toma como falso, ("false") no lo toma

/*{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad>17 && edad<13) //no entra nunca, no existe(mal hecho)
{
	alert(" no sos adolescente");
}
}*/
//FORMA 1
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad>17 || edad<13) 
{
	alert(" no sos adolescente"); //funciona
}
}
//FORMA 2
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad<18 && edad>12) 
{
}
	else
{
		alert(" no sos adolescente"); //funciona
}
}
//FORMA 3
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (!(edad<18 && edad>12)) 
{
	alert(" no sos adolescente "); //funciona
}
}


