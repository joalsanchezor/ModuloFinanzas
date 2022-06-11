<?php
    include('includes/utilerias.php');
    //extraer los datos de las variables
    $concepto = $_POST['idViaticoE'];
    $nombre = $_POST['idEmpleadoE'];
    $fecha = $_POST['fechaE'];
    $cantidad = $_POST['cantidadE'];

    $GLOBALS["conexion"] = conectar();
    $GLOBALS["retorno"] = [];

    $sql = "INSERT INTO asignarviatico(idEmpleado,idViatico,fecha,cantidad,comprobado) values('$nombre','$concepto','$fecha','$cantidad','NO')";

    $resultado = realizarSQL( $sql );

    $GLOBALS["retorno"]["operacion"] = "OK";
    mysqli_close($GLOBALS["conexion"]);
    echo( json_encode( $GLOBALS["retorno"] ) );  // AQUI SE DEVUELVEN LOS DATOS
    die();

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