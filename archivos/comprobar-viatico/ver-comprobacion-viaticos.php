<?php
    include('includes/utilerias.php');
    
    session_start();

    //include('includes/encabezado.php');
?>
 <div class = "centraTabla">
            <table border="1" >
                <tr>
                    <td>Empleado</td>
                    <td>Viatico Asignado</td>
                    <td>Cantidad</td>
                    <td>Fecha</td>
                    <td>Archivos adjuntos</td>
                </tr>

                <?php 
                    $conexion = conectar();
                    $sql = "SELECT * from comprobarviatico";
                    $result = mysqli_query($conexion,$sql);
                    while($mostrar = mysqli_fetch_array($result)){
                ?>

                      <tr>
                        <td><?php echo $mostrar['empleado'] ?></td>
                        <td><?php echo $mostrar['viatico'] ?></td>
                        <td><?php echo $mostrar['cantidad'] ?></td>
                        <td><?php echo $mostrar['fecha'] ?></td>
                        <td><?php echo $mostrar['archivos'] ?></td>
                        <?php
                            //$conexion = conectar();
                            $sql1 = "SELECT C.nombrePuesto FROM puesto P, empleado E where P.idPuesto = E.idPuesto and E.idEmpleado = {$mostrar['idEmpleado']}";
                            $result1 = mysqli_query($conexion,$sql1);
                    
                            while($mostrar1=mysqli_fetch_array($result1)){
                                echo '<td>'.$mostrar1['nombrePuesto'].'</td>';
                            }
                        ?>
                    </tr>
            <?php 
            }
        ?>
    </table>
</div>