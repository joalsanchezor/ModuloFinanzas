<?php
    include('includes/utilerias.php');

    //extraer los datos de las variables
    $idEmpleado = $_POST['idEmpleado'];
    $idTipoPercepcion = $_POST['idTipoPercepcion'];
    $cantidad = $_POST['cantidad'];

    // PASO 6: DEJAR LA VARIABLE DE CONEXION DE FORMA GLOBAL
    $GLOBALS["conexion"] = conectar();

    // PASO 7: DEFINIR EL ARREGLO ASOCIATIVO EN DONDE SE COLOCARAN
    //         LOS DATOS QUE SE ENVIARAN DE REGRESO A JAVA SCRIPT 
    $GLOBALS["retorno"] = [];
    // $GLOBALS["retorno"]["registros"] = [];

    // foreach($_POST as $campo => $valor){
    //     echo "- ". $campo ." = ". $valor;
    // }

    // PASO 8: HACER LA CONSULTA
    $sql = "INSERT INTO pagartipopercepcion (cantidad, idEmpleado, idTipoPercepcion, estatus) values('$cantidad', '$idEmpleado','$idTipoPercepcion','NO PAGADO')";

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