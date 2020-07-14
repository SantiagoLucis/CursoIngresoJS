/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1;
	var numero2;
	var resultado;

	var numero1=txtIdNumeroDividendo.value;
	var	numero1=parseInt(numero1);

	var numero2=txtIdNumeroDivisor.value;
	var numero2=parseInt(numero2);

	resultado=numero1%numero2;

	alert("el resto es " + resultado);

	// % para el resto / para division





}
