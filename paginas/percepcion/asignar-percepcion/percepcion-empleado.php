<?php
    include('includes/utilerias.php');
    
    session_start();
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "estilo.css">
</head>
<body>
    <main>
        <div class="formulario-div">
            <form method="post" enctype="multipart/form-data">
                <h2>Asignar percepción a empleado</h2>
                <select name="empleado" id="empleado">
                         <option value="0">Seleccione un empleado:</option>
                        <?php 
                            $conexion = conectar();

                            $query = "SELECT DISTINCT e.idEmpleado, e.nombre FROM empleado e order by e.nombre asc";
                            $resultado = mysqli_query($conexion, $query);

                            while($valores = mysqli_fetch_array($resultado)){
                                echo '<option value="'.$valores[idEmpleado].'">'.$valores[nombre].'</option>';
                            }
                        ?>
                </select>   

                <select name="tipoPercepcion" id="tipoPercepcion">
                         <option value="0">Seleccione la percepción:</option>
                        <?php 
                            $conexion = conectar();

                            $query = "SELECT * FROM tipopercepcion order BY nombre asc";
                            $resultado = mysqli_query($conexion, $query);

                            while($valores = mysqli_fetch_array($resultado)){
                                echo '<option value="'.$valores[idTipoPercepcion].'">'.$valores[nombre].'</option>';
                            }
                        ?>
                </select>   
                
                <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad de percepción">  
            </form>
        </div>
    </main>    
</body>