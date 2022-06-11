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
?>