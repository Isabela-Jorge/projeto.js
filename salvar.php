<?php

include "conexao.php";  // importa a conexão com o banco

// recebe dados do formulário
$tipo = $POST["tipo"];
$valor = $POST["valor"];
$data = $POST["data"];

$sql = "INSERT INTO Transacoes(tipo, valor, data)
VALUES('$tipo', '$valor', '$data')";

// executa comando
if($conexao->query($sql) === TRUE){
    echo "Transação salva com sucesso!";
}
else{
    echo "Erro: " . $conexao->error;
}

$conexao->close();  // fecha conexão

?>