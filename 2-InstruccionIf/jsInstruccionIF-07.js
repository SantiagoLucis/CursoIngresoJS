function mostrar()
{
	//tomo la edad  
	var estadoCivilIngresado;
	var edad;
	edad=txtIdEdad.value;
	estadoCivilIngresado = estadoCivil.value;
	edad=parseInt(edad);

	if (edad < 18 && estadoCivilIngresado != "Soltero") 
{
		alert("es muy pequeño para NO ser soltero");
} 
	
}//FIN DE LA FUNCIÓN