/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	while(sexoIngresado!="f")
	{
		sexoIngresado=prompt("el sexo ingresado no es valido, porfavor ingrese denuevo f o m");
	
	}

	
	txtIdSexo.value=sexoIngresado;
	//no funciona
}//FIN DE LA FUNCIÓN