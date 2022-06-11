<?php
    include('includes/utilerias.php');

    // PASO 5: LOS DATOS ENVIADOS SE RECIBEN CON POST
    //$empleado = $_POST['empleadoC'];
    $idcomprobado = $_POST['idcomprobado'];
    $cantidad = $_POST['cantidad'];

    // PASO 6: DEJAR LA VARIABLE DE CONEXION DE FORMA GLOBAL
    $GLOBALS["conexion"] = conectar();

    // PASO 7: DEFINIR EL ARREGLO ASOCIATIVO EN DONDE SE COLOCARAN
    //         LOS DATOS QUE SE ENVIARAN DE REGRESO A JAVA SCRIPT 
    $GLOBALS["retorno"] = [];
    // código para select.
    // $GLOBALS["retorno"]["registros"] = [];

    // PASO 8: HACER LA CONSULTA
    $sql = "INSERT INTO reintegro (idComprobarViatico, cantidad) values  
    (   '$idcomprobado','$cantidad')";

    // PASO 9: REALIZAR LA CONSULTA
    $resultado = realizarSQL( $sql );


    // paso 11: AL FINAL DEVOLVEMOS UNA OPERACION OK COMO RESPUESTA
    $GLOBALS["retorno"]["operacion"] = "OK";
    mysqli_close($GLOBALS["conexion"]);
    echo( json_encode( $GLOBALS["retorno"] ) );  // AQUI SE DEVUELVEN LOS DATOS
    die();  // AQUI TERMINA EL PROCESO

    // NOTA: Yo les recomiendo que pogan siempre este metodo
    //   ya que aveces puede encontrar errores en la consulta
    //   Se le pasa el string de la consulta
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