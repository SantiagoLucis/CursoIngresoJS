function mostrar()
{
	//tomo la edad  
	
	var estadoCivilIngresado;
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estadoCivilIngresado = estadoCivil.value;

	if (edad>17 && estadoCivilIngresado == "Soltero") 
	{
		alert("Es soltero y no es menor");
	} 
}//FIN DE LA FUNCIÓN