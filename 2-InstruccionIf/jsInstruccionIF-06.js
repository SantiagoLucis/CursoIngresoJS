function mostrar()
{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad>17)
{
		alert(" sos mayor de edad ");
}
    else
{
	if (edad>12)
{
		alert(" sos adolescente");
}
	 else 
{	
		alert("sos un niño");
}
}
}//FIN DE LA FUNCIÓN
/* usa mucho el microprocesador
{
    var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if (edad<12)
{
	alert("niño");
}
if (edad>12 && edad<18)
{
	alert("adolescente");
}
if (edad>18)
{
	alert("mayor");
}*/