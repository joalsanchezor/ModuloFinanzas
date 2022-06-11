<?php
    include('includes/utilerias.php');

    // PASO 5: LOS DATOS ENVIADOS SE RECIBEN CON POST
    $nombre = $_POST['nombreE'];
    $numeroCuenta = $_POST['numCuentaE'];
    $numeroTarjeta = $_POST['numTarjetaE'];
    $direccion = $_POST['dirE'];
    $celular = $_POST['celularE'];
    $tipoSangre = $_POST['tipoSangreE'];
    $nss = $_POST['nssE'];
    $puesto = $_POST['id_puestoE'];

    // PASO 6: DEJAR LA VARIABLE DE CONEXION DE FORMA GLOBAL
    $GLOBALS["conexion"] = conectar();

    // PASO 7: DEFINIR EL ARREGLO ASOCIATIVO EN DONDE SE COLOCARAN
    //         LOS DATOS QUE SE ENVIARAN DE REGRESO A JAVA SCRIPT 
    $GLOBALS["retorno"] = [];
    // código para select.
    // $GLOBALS["retorno"]["registros"] = [];

    // PASO 8: HACER LA CONSULTA
    $sql = "INSERT INTO empleado (nombre , numeroCuenta , numeroTarjeta , direccion ,
    celular , tipoSangre , nss , idPuesto) values
    
    (   '$nombre','$numeroCuenta','$numeroTarjeta','$direccion',
        '$celular','$tipoSangre','$nss', $puesto
    )";

    // PASO 9: REALIZAR LA CONSULTA
    $resultado = realizarSQL( $sql );

    // PASO 10: SI LA CONSULTA FUERA UN SELECT SE EVALUAN
    //          LOS REGISTROS OBTENIDOS
    //CODIGO PARA CONSULTAS
    /*
    while($row = mysqli_fetch_array($resultado))
    {
        // si fuese un empleado colocamos sus datos en un array llamado 
        // reg (o como le quieran poner)
        $reg = [];
        $reg["nombre"] = $row["nombre"];
        $reg["numeroCuenta"] = $row["numeroCuenta"];

        // aqui se agrega el array (reg) al arreglo que almacena cada uno
        // de los registros obtenidos
        array_push( $GLOBALS["retorno"]["registros"] , $reg ); 
    }*/


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