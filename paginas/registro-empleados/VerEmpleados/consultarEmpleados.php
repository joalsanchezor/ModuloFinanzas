<?php
    include('includes/utilerias.php');
    $GLOBALS["conexion"] = conectar();
 
    $GLOBALS["retorno"] = [];
    $GLOBALS["retorno"]["registros"] = [];

    $sql = "SELECT e.idEmpleado , e.nombre , e.numeroCuenta , e.numeroTarjeta , 
                   e.direccion , e.celular , e.tipoSangre , e.nss , 
                   e.correo , p.nombrePuesto 
            FROM empleado e
            INNER JOIN puesto p 
            ON(e.idPuesto = p.idPuesto)";
    $resultado = realizarSQL( $sql );

    while($row = mysqli_fetch_array($resultado))
    {
        $reg = [];
        $reg["idEmpleado"] = $row["idEmpleado"];
        $reg["nombre"] = $row["nombre"];
        $reg["numeroCuenta"] = $row["numeroCuenta"];
        $reg["numeroTarjeta"] = $row["numeroTarjeta"];
        $reg["direccion"] = $row["direccion"];
        $reg["celular"] = $row["celular"];
        $reg["tipoSangre"] = $row["tipoSangre"];
        $reg["nss"] = $row["nss"];
        $reg["nombrePuesto"] = $row["nombrePuesto"];
        $reg["correo"] = $row["correo"];
        array_push( $GLOBALS["retorno"]["registros"] , $reg ); 
    }
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