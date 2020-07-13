/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var edadIngrasada;
	var nombreIngresado;

	   nombreIngresado=txtIdNombre.value;
	   edadIngrasada=txtIdEdad.value;
	   //1er paso
	   alert("Usted se llama "+nombreIngresado );
	   alert("y tiene "+edadIngrasada+" años");

	   //2do paso
	   //alert("Usted se llama "+nombreIngresado+" y tiene"+edadIngrasada+" años")


	//alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngrasada+" años");
}

