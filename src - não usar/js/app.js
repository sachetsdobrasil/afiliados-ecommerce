import './jquery.js';
import '../css/main.scss';
import './menu-holder.js';
import './smooth-scroll.js';
import './responsive-menu';
import './validaCpf.js';
import './validaCnpj.js';
import './jquery.mask.min.js';
import './masked-inputs.js';
import './buscaCep.js';

let cadastroSolicitante = document.querySelector("#cadastroSolicitante");
let CPF = document.querySelector("#cpf");
let tooltip = document.querySelector(".tooltip");
let cep = document.querySelector("#cep");

cep.addEventListener('blur', function(){
	pesquisacep(cep.value);
});


cadastroSolicitante.addEventListener('submit', function(event){
	var CpfIsCorrect = validaCpf(CPF.value);
	var CNPJisCorrect = validaCNPJ(CPF.value);
	

	if(!CpfIsCorrect && !CNPJisCorrect){
		event.preventDefault();
		console.log(CNPJisCorrect);
		console.log(CpfIsCorrect);
		console.log(tooltip.className);
		tooltip.className += " isShown";
		
		setTimeout(function() {
			tooltip.classList.remove("isShown"); 
		}, 2000);

	}

})