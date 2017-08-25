<meta charset="utf-8">
<?php 
				
		$nome = $_POST["nome"];
		$cpf = $_POST["cpf"];
		$email = $_POST["email"];
		$banco = $_POST["banco"];
		$contacorrente = $_POST["contacorrente"];
		$agencia = $_POST["agencia"];
		$crn = $_POST["crn"];
		$cep = $_POST["cep"];
		$endereco = $_POST["endereco"];
		$numero = $_POST["numero"];
		$complemento = $_POST["complemento"];
		$bairro = $_POST["bairro"];
		$cidade = $_POST["cidade"];
		$estado = $_POST["estado"];
		$telfixo = $_POST["telfixo"];
		$celular = $_POST["celular"];
		
		
		$msg = "

		
		<h2>Cadastro no programa de Afiliados do Bem-estar:</h2>
		<ul>
			<li> <b>Nome:</b> $nome </li>
			<li> <b>CPF:</b> $cpf </li>
			<li> <b>E-mail:</b> $email </li>
			<li> <b>Banco:</b> $banco </li>
			<li> <b>Conta Corrente:</b> $contacorrente </li>
			<li> <b>Agência:</b> $agencia </li>
			<li> <b>CRN/CRM:</b> $crn </li>
			<li> <b>CEP:</b> $cep </li>
			<li> <b>Endereço:</b> $endereco </li>
			<li> <b>Número:</b> $numero </li>
			<li> <b>Complemento:</b> $complemento </li>
			<li> <b>Bairro:</b> $bairro </li>
			<li> <b>Cidade:</b> $cidade </li>
			<li> <b>Estado:</b> $estado </li>
			<li> <b>Telefone Fixo:</b> $telfixo </li>
			<li> <b>Telefone Celular:</b> $celular </li>

		</ul>


		";
				  
		$headers = "MIME-Version: 1.1\n";
        $headers .= "Content-type: text/html; charset=utf-8\n";     
		$headers .= "From: Afiliados do Bem-estar <afiliados@sachetsdobrasil.com.br>\n"; // remetente
		$headers .= "Return-Path: Afiliados do Bem-estar <afiliados@sachetsdobrasil.com.br>\n"; // return-path

		$assunto = "Afiliados do Bem-estar";
		$para="afiliados@sachetsdobrasil.com.br";	
              
		mail ($para,$assunto,$msg,$headers);		
	
		

?>

<script>
	alert("Cadastro realizado com sucesso");
</script>

<?php

echo "<meta http-equiv=refresh content=\"0;URL=index.html#cadastroSolicitante\">";

?>

