<?php
    include('includes/utilerias.php');

    //extraer los datos de las variables
    $nombre_puesto = $_POST['nombrePuestoE'];
    $sueldo_puesto = $_POST['sueldoE'];

    $GLOBALS["conexion"] = conectar();
    $GLOBALS["retorno"] = [];
   
    $sql = "INSERT INTO puesto (nombrePuesto, sueldo) values('$nombre_puesto','$sueldo_puesto')";

    $resultado = realizarSQL( $sql );

    $GLOBALS["retorno"]["operacion"] = "OK";
    mysqli_close($GLOBALS["conexion"]);
    echo( json_encode( $GLOBALS["retorno"] ) );  // AQUI SE DEVUELVEN LOS DATOS
    die();  // AQUI TERMINA EL PROCESO

    function realizarSQL( $sql )
    {
        $registros = mysqli_query( $GLOBALS["conexion"] , $sql );
        if( $registros == false ) 
        {  
            $GLOBALS["retorno"]["operacion"] = "ERROR AL MOMENTO DE REALIZAR SQL ::  " .$sql;
            echo( json_encode( $GLOBALS["retorno"] ) );
            die();
        }
        return $registros;
    }

?>