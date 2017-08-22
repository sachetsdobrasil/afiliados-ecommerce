$(document).ready(function(){
	var cpf = $('#cpf');
	var telfixo = $('#telfixo');
	var celular = $('#celular');

	cpf.mask('000.000.000-00');
	telfixo.mask('(00)0000-0000');
	celular.mask('(00)0000-00000');

	
	$('#cep').mask('00000-000');
})