<?php
$servername = "localhost"; // endereço do servidor MySQL
$username = ""; //
$password = "root"; 
$dbname = "bdportifolio"; // nome do banco de dados

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
} else {
    echo "Conexão bem-sucedida!";
}

// Fechar a conexão
$conn->close();
?>
