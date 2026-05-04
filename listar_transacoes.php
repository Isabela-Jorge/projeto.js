<?php

include "conexao.php"; // conecta com o banco de dados (arquivo conexao.php)

$sql = "SELECT * FROM Transacoes";  // comando SQL: pega todas as transações da tabela

$result = $conexao->query($sql);  // executa o comando no banco

$dados =[]; // cria um array vazio para armazenar os dados


while($row = $result->fetch_assoc()){ // enquanto tiver linhas no banco...
    $dados[] = $row; // adiciona cada linha dentro do array
}

echo json_encode($dados);  // transforma o array em JSON (formato que o JavaScript entende)

$conexao->close();  // fecha conexão com o banco

?>