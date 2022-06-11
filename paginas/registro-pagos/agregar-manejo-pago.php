<?php
    include('includes/utilerias.php');

    //extraer los datos de las variables
    $nombrePago = $_POST['nombrePago'];
    $fechaInicio = $_POST['fechaInicio'];
    $fechaFinal = $_POST['fechaFinal'];
    $periodo = $_POST['periodo'];

    $conexion = conectar();

    $sql = "insert into tiposervicio(nombreServicio,fechaInicio,fechaFinal) values('$nombrePago','$fechaInicio','$fechaFinal')";
    $resultado = mysqli_query($conexion, $sql);

    if($resultado){
        //redireccionar('Datos guardados exitosamente','agregar.php');
        //echo '<h1 style="text-align:center">Datos guardados exitosamente</h1>';
        redireccionar("catalogo-pagos.php");
    }
    else{
        //redireccionar('Error: ' . mysqli_error($conexion), 'agregar.php');
        echo '<h1 style="text-align:center">error</h1>';
    }
    mysqli_close($conexion);
?>