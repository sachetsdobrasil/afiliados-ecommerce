<meta charset="utf-8">
<?php 
		include"conectar.php";
		
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

		
		<h1>Esta é uma mensagem programada:</h1>
		<ul>
			<li> $nome </li>
			<li> $cpf </li>
			<li> $email </li>
			<li> $banco </li>
			<li> $contacorrente </li>
			<li> $agencia </li>
			<li> $crn </li>
			<li> $cep </li>
			<li> $endereco </li>
			<li> $numero </li>
			<li> $complemento </li>
			<li> $bairro </li>
			<li> $bairro </li>
			<li> $cidade </li>
			<li> $estado </li>
			<li> $telfixo </li>
			<li> $celular </li>

		</ul>


		";
				  
		$headers = "MIME-Version: 1.1\n";
        $headers .= "Content-type: text/html; charset=utf-8\n";     
		$headers .= "From: Sachets < falecom@sachets.com.br>\n"; // remetente
		$headers .= "Return-Path: Sachets < falecom@sachets.com.br>\n"; // return-path

		$assunto = "Chegou Sachets";
		$para="falecom@sachets.com.br";	
              
		mail ($email,$assunto,$msg,$headers);		
	
		

?>

<script>
	alert("Cadastrado com sucesso");
</script>

<?php

echo "<meta http-equiv=refresh content=\"0;URL=index.html#cadastroSolicitante\">";

?>

