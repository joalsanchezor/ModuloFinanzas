<?php
    include('includes/utilerias.php');
    
    session_start();

    //include('includes/encabezado.php');
?>
<div class = "centraTabla">
    <table border="1" >
        <tr>
            <td>Concepto</td>
            
        </tr>

        <?php 
            $conexion = conectar();
            $sql = "SELECT * from catalogoviatico";
            $result = mysqli_query($conexion,$sql);
            while($mostrar = mysqli_fetch_array($result)){
        ?>

            <tr>
                <td><?php echo $mostrar['concepto'] ?></td>
            
                <?php
                    //$conexion = conectar();
                    //SELECT P.nombrePuesto FROM puesto P, empleado E where P.idPuesto = E.idPuesto and E.idEmpleado = 3
                    //$sql1="SELECT P.nombrePuesto FROM puesto P, empleado E where P.idPuesto = E.idPuesto";
                    $sql1 = "SELECT P.nombrePuesto FROM puesto P, empleado E where P.idPuesto = E.idPuesto and E.idEmpleado = {$mostrar['idEmpleado']}";
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