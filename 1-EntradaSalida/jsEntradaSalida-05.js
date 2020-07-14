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

	   /* otro paso dependiendo de la situacion
	   
	   txtIdNombre txtIdEdad
	   var nombre;
	   var edad;

	   nombre = txtIdNombre.value;
	   edad = txtIdEdad.value;

	   alert("Usted se llama " + nombre + " y tiene " + edad + " años");

	   2do paso
	   alert("Usted se llama "+nombreIngresado+" y tiene"+edadIngrasada+" años")


	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngrasada+" años");*/
}

