<?php
    include('includes/utilerias.php');
    $GLOBALS["conexion"] = conectar();
 
    $GLOBALS["retorno"] = [];
    $GLOBALS["retorno"]["registros"] = [];

    $sql = "SELECT a.idEmpleado, a.idAsignarViatico ,e.nombre, c.concepto ,a.fecha, a.cantidad, a.comprobado 
            FROM asignarviatico a 
            INNER JOIN empleado e ON(a.idEmpleado = e.idEmpleado) 
            INNER JOIN catalogoviatico c ON(a.idViatico = c.idViatico) where a.comprobado='NO' ORDER BY a.fecha DESC";
    $resultado = realizarSQL( $sql );

    while($row = mysqli_fetch_array($resultado))
    {
        $reg = [];
        $reg["idEmpleado"] = $row["idEmpleado"];
        $reg["idAsignarViatico"] = $row["idAsignarViatico"];
        $reg["nombre"] = $row["nombre"];
        $reg["concepto"] = $row["concepto"];
        $reg["fecha"] = $row["fecha"];
        $reg["cantidad"] = $row["cantidad"];
        //$reg["comprobado"] = $row["comprobado"];
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