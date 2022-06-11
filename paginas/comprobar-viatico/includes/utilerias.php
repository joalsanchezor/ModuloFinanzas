<?php
    function conectar()
    {
        DEFINE('SERVIDOR','localhost:3306');
        DEFINE('USUARIO','root');
        DEFINE('PASSWORD', '');
        DEFINE('BD','modulonominabd');

        $resultado = mysqli_connect(SERVIDOR, USUARIO, PASSWORD, BD);
        return $resultado;   
    }

    function redireccionar($dir){
        header('refresh:1,url=' . $dir);
    }

    function subir_imagen($archivo){
        if(empty($archivo)){
            return null;
        }

        $nombre = $archivo['name'];
        $origen = $archivo['tmp_name'];
        $tama = $archivo['size'];
        $error = $archivo['error'];

        $extensiones = array('jpg','jpeg','png');

        $nombre_y_ext = explode('.', $nombre);

        $extension = strtolower(end($nombre_y_ext));

        if(!in_array($extension,$extensiones)){
            echo 'Archivo no válido';
            return null;
        }
        // else if($tama > 1000000){
        //     echo 'El archivo es más grande de lo permitido, lo máximo es 1MB';
        //     return null;
        // }
        else if($error > 0){
            echo 'Error al subir archivo';
            return null;
        }
        else{
            $nuevo_nombre = uniqid('',true) . '.' . $extension;
            $destino = "../comprobantes/" . $nuevo_nombre;
            move_uploaded_file($origen, $destino);

            return $destino;
        }
    }
?>