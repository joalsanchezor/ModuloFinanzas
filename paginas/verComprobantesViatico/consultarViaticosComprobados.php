<?php
    include('includes/utilerias.php');
    $GLOBALS["conexion"] = conectar();
 
    $GLOBALS["retorno"] = [];
    $GLOBALS["retorno"]["registros"] = [];

    $sql = "SELECT e.nombre,cv.concepto,c.idComprobarViatico,c.fecha,c.cantidad, c.imagenComprobante FROM comprobarviatico c 
    inner JOIN asignarviatico a on (a.idAsignarViatico = c.idAsignarViatico) 
    inner JOIN catalogoviatico cv on (cv.idViatico = a.idViatico) 
    inner JOIN empleado e on(a.idEmpleado=e.idEmpleado) ORDER BY c.fecha DESC";
    $resultado = realizarSQL( $sql );

    while($row = mysqli_fetch_array($resultado))
    {
        $reg = [];
        $reg["nombre"] = $row["nombre"];
        $reg["concepto"] = $row["concepto"];
        $reg["fecha"] = $row["fecha"];
        $reg["idComprobarViatico"] = $row["idComprobarViatico"];
        $reg["cantidad"] = $row["cantidad"];
        $reg["imagenComprobante"] = $row["imagenComprobante"];
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