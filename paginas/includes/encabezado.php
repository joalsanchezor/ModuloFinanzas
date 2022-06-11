<?php
    
    if(session_status() == PHP_SESSION_NONE){
        session_start();
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/estilo.css">
    <title>GRUPO DINÁMICO</title>
</head>
<body>
    <div class="nav-contenedor">
        <nav>
            <div class="logo">
                    <img src="../imagenes/logo.webp" alt="">
                    <h2>GRUPO DINÁMICO</h2>
            </div>
            <ul id="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Viaticos</a></li>
                <li><a href="#">Pagos</a></li>
                <li><a href="#">Nomina</a></li>
                <li><a href="#">Prestamos</a></li>
            </ul>
        </nav>
    </div>
    <!-- <nav class="nav-contenedor">
        <img src="../imagenes/" alt="">
        <h2 class="logo">GRUPO DINAMICO</h2>
        <ul>
            <li>Inicio</li>
            <li>Viaticos</li>
            <li>Pagos</li>
            <li>Nomina</li>
            <li>Prestamos</li>            
        </ul>
    </nav> -->
    <main>