<?php
    include('includes/utilerias.php');
    
    session_start();
    
    //include('includes/encabezado.php');

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "estilo.css">
</head>
<body>
    <main>
        <div class="formulario-div">
            <form action="agregar-manejo-viaticos.php" method="post" enctype="multipart/form-data">
                <h2>Asignación de Viaticos a empleado</h2>
                    <select name="nombre" id="nombre">
                        <option value="0">Seleccione un empleado:</option>
                        <?php 
                            $conexion = conectar();

                            $query = "SELECT idEmpleado, nombre FROM empleado";
                            $resultado = mysqli_query($conexion, $query);

                            while($valores = mysqli_fetch_array($resultado)){
                                echo '<option value="'.$valores[idEmpleado].'">'.$valores[nombre].'</option>';
                            }
                        ?>
                    </select>    
                <input type="date" id="fecha" name="fecha" placeholder="Fecha de viatico">  
                <select name="concepto" id="concepto">
                        <option value="0">Seleccione el concepto:</option>
                        <?php 
                            $conexion = conectar();

                            $query = "SELECT idViatico, concepto FROM catalogoViatico";
                            $resultado = mysqli_query($conexion, $query);

                            while($valores = mysqli_fetch_array($resultado)){
                                echo '<option value="'.$valores[idViatico].'">'.$valores[concepto].'</option>';
                            }
                        ?>
                    </select> 
                <!--<input type="text" id="concepto" name="concepto" placeholder="Concepto">-->
                <input type="number" id="cantidad" name="cantidad" placeholder="Cantidad del viatico">
                

                <!--<input type="submit" value="Asignar viático" name="guardar" class="boton">-->
                <!--<input type="submit" value="Cancelar" name="cancelar" class="boton">-->
                <!-- <input type="submit" value="Historial de viaticos" name="guardar" class="boton"> -->
            </form>
        </div>
    </main>    
</body>