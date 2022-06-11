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
            <form action="agregar-manejo-compviatico.php" method="post" enctype="multipart/form-data">
                <h2>Comprobar viaticos</h2>         
                <select name="empleado" id="empleado">
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
                <select name="viatico" id="viatico">
                        <option value="0">Seleccione el viatico:</option>
                        <?php 
                            $conexion = conectar();

                            $query = "SELECT a.idAsignarViatico, c.concepto from asignarviatico a inner join catalogoviatico c on (a.idViatico = c.idViatico)";
                            $resultado = mysqli_query($conexion, $query);

                            while($valores = mysqli_fetch_array($resultado)){
                                echo '<option value="'.$valores[idViatico].'">'.$valores[concepto].'</option>';
                            }
                        ?>
                </select>    
                <input type="number" id="cantidad" name="cantidad" placeholder="Cantidad a comprobar del viático">  
                <input type="date" id="fecha"name='fecha' placeholder="Fecha de comprobacion">
                <input type="file" name="imagen" id="imagen">
                
                <!--<a href="ver-empleados.php" class="boton">Ver Empleados</a>-->
                <!-- <input type="reset" class="boton" value="Cancelar" name="cancelar">   -->
                <!-- <input type="submit" class="boton" value="Ver empleados" name="verEmpleados">           -->
            </form>
        </div>
    </main>    
</body>