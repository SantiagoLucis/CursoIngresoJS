/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//error
	//nombreIngresado=txtIdNombre ;// [object HTMLInputElement]//si me olvido el value
	nombreIngresado=txtIdNombre.value ;
	//nombreIngresado=document.getElementById('txtIdNombre').value;
	alert("su nombre es: " + nombreIngresado);


}


