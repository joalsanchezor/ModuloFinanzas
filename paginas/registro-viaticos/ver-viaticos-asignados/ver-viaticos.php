<?php
    include('includes/utilerias.php');
    
    session_start();

    //include('includes/encabezado.php');
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GRUPO DINÁMICO</title>

    
    <!-- ICONOS-->
    <link rel = "stylesheet" href = "RECURSOS/css/all.min.css">

    <!-- ESTILO -->
    <link rel = "stylesheet" href = "verEmpleados.css">
    <link rel = "stylesheet" href = "estilo.css">
</head>
<body>
    <table id = "tablaViaticoNoComprobado" class = "div_tabla">
        <!-- CABEZERA DE COLUMNAS -->
        <tr>
            <td class = "columna div_columna_Nombre">Empleado</td>
            <td class = "columna div_columna_NumCuenta">Concepto</td>
            <td class = "columna div_columna_NumTarjeta">Fecha</td>
            <td class = "columna div_columna_Direccion">Cantidad $</td>
            <!-- <td class = "columna div_columna_Celular">Estatus</td> -->
        </tr>
        <!-- <tr class = "row">
            <td>JORGE ALBERTO SANCHEZ ORTIZ</td>
            <td>COMIDA</td>
            <td>2021-06-03</td>
            <td>3000</td>
            <td>NO</td>
        </tr> -->
    </table>
</body>