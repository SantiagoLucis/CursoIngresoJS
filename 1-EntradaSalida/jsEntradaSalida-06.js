/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/*mal programado pero funciona (no aprueba)

	var uno = parseInt(txtIdNumeroUno.value);
	var dos = parseInt(txtIdNumeroDos.value);
	var resultado= uno + dos;
	alert("la suma es " + resultado);*/

	//bien programado
	
	var numero1;
	var numero2;
	var resultado;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;

	alert(resultado);

}

