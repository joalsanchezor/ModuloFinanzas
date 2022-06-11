<?php
    include('includes/utilerias.php');
    $GLOBALS["conexion"] = conectar();
 
    $GLOBALS["retorno"] = [];
    $GLOBALS["retorno"]["registros"] = [];

    $idEmpleado = $_POST['empleado'];

    $sql = "SELECT a.idAsignarViatico, c.concepto FROM asignarviatico a inner join catalogoviatico c on (a.idViatico = c.idViatico) where a.idEmpleado = '$idEmpleado' AND a.comprobado='NO'";
    $resultado = realizarSQL( $sql );

    while($row = mysqli_fetch_array($resultado))
    {
        $reg = [];
        $reg["idAsignarViatico"] = $row["idAsignarViatico"];
        $reg["concepto"] = $row["concepto"];
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