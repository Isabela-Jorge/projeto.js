<?php 

$servidor ="localhost"; // endereço do servidor do banco de dados
$usuario ="root";  // usuário padrão do MySQL no XAMPP
$senhar ="";  // senha do banco (no XAMPP geralmente é vazia)
$banco ="financeiro";  // nome do banco de dados que criamos no phpMyAdmin

$conexao = new mysqli($servidor, $usuario, $senha, $banco);  // cria a conexão com o banco de dados


if($conexao->connect_error){   // verifica se houve erro na conexão
    die("Erro de conexao".$conexao->connect_error); // se der erro mostra essa mensagem
}

?>