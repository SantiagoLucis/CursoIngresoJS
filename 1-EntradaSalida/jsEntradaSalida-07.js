/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	//IMPORTANTE. CADA PARTE EN CADA RENGLON. hacerlo separado poniendo cada cosa en cada renglon.
	var numero1;
	var numero2;
	var resultado;

	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);

	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);

	resultado=numero1+numero2;

	alert(resultado);


	

function restar()
{
	var numero1=txtIdNumeroUno.value;
	var numero1=parseInt(numero1);

	var numero2=txtIdNumeroDos.value;
	var numero2=parseInt(numero2);

	resultado=numero1 - numero2;

	alert(resultado);



function multiplicar()
{ 
	var numero1=txtIdNumeroUno.value;
	var numero1=parseInt(numero1);

	var numero2=txtIdNumeroDos.value;
	var numero2=parseInt(numero2);

	resultado=numero1*numero2;

	alert(resultado);
	

}

function dividir()
{
	var numero1=txtIdNumeroUno.value;
	var numero1=parseInt(numero1);

	var numero2=txtIdNumeroDos.value;
	var numero2=parseInt(numero2);

	resultado=numero1/numero2;

	alert(resultado);

}