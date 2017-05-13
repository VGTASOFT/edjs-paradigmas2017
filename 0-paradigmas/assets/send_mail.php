<?php
//echo 'Los datos han pasado por el Servidor en PHP';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$comentarios = $_POST['comentarios'];

$res = "
  <p>Los datos que enviaste son:</p>
  <ul>
    <li>Nombre: $nombre</li>
    <li>Email: $email</li>
    <li>Asunto: $asunto</li>
    <li>Comentarios: $comentarios</li>
  </ul>
";

//mail()

echo $res;