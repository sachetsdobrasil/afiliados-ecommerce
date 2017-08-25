var uf = document.getElementById("estado");
var cidade = document.getElementById('cidade');
var bairro = document.getElementById('bairro');
var endereco = document.getElementById('endereco');
var cep = document.getElementById('cep');
console.log(`${uf} ${cidade} ${bairro}`);

window.limpaformcep = function() {
            //Limpa valores do formulário de cep.
            cep.value=("");
            endereco.value=("");
            bairro.value=("");
            cidade.value=("");
            uf.value=("");
            // document.getElementById('ibge').value=("");
    }

    window.meu_callback = function(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            endereco.value=(conteudo.logradouro);
            bairro.value=(conteudo.bairro);
            cidade.value=(conteudo.localidade);
            uf.value=(conteudo.uf);
            // document.getElementById('ibge').value=(conteudo.ibge);
        } //end if.
        else {
            //CEP não Encontrado.
            limpaformcep();
            alert("CEP não encontrado.");
        }
    }
        
    window.pesquisacep = function(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                endereco.value="...";
                bairro.value="...";
                cidade.value="...";
                estado.value="...";
                // document.getElementById('ibge').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = '//viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpaformcep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpaformcep();
        }
    };