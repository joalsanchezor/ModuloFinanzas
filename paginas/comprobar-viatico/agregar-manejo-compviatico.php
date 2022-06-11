<?php
    include('includes/utilerias.php');

    // PASO 5: LOS DATOS ENVIADOS SE RECIBEN CON POST
    //$empleado = $_POST['empleadoC'];
    $viatico = $_POST['viaticoC'];
    $cantidad = $_POST['cantidadC'];
    $fecha = $_POST['fechaC'];
    
    $imagen = subir_imagen($_FILES['imagenC']);//$_POST['imagenC'];

    // PASO 6: DEJAR LA VARIABLE DE CONEXION DE FORMA GLOBAL
    $GLOBALS["conexion"] = conectar();

    // PASO 7: DEFINIR EL ARREGLO ASOCIATIVO EN DONDE SE COLOCARAN
    //         LOS DATOS QUE SE ENVIARAN DE REGRESO A JAVA SCRIPT 
    $GLOBALS["retorno"] = [];
    // código para select.
    // $GLOBALS["retorno"]["registros"] = [];

    // PASO 8: HACER LA CONSULTA
    $sql = "INSERT INTO comprobarviatico (idAsignarViatico,cantidad,imagenComprobante,fecha) values  
    (   '$viatico','$cantidad','$imagen','$fecha')";

    // PASO 9: REALIZAR LA CONSULTA
    $resultado = realizarSQL( $sql );

    //CAMBIO DEL ESTATUS DEL VIATICO QUE SE ACABA DE COMPROBAR
    $sql2 = "UPDATE asignarviatico SET comprobado = 'SI' WHERE idAsignarViatico = '$viatico'";
    $resultado2 = realizarSQL( $sql2 );

    //CONSULTA A LA VISTA QUE HEMS CREADO
    // $sql3 = "SELECT * from vistaviaticoscomprobados WHERE idviatico='$viatico'";
    // $resultado = realizarSQL( $sql );

    // while($row = mysqli_fetch_array($resultado))
    // {
    //     $reg = [];
    //     $reg["idcomprobado"] = $row["idcomprobado"];
    //     $reg["diferencia"] = $row["diferencia"];
    //     array_push( $GLOBALS["retorno"]["registros"] , $reg ); 
    // }


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