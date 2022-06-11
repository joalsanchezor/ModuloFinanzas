<?php
    include('includes/utilerias.php');
    
    session_start();

    //include('includes/encabezado.php');
?>
<div class = "centraTabla">
    <table border="1" >
        <tr>
            <td>Nombre del Empleado</td>
            <td>Número Cuenta</td>
            <td>Número Tarjeta</td>
            <td>Dirección</td>
            <td>Celular</td>
            <td>Tipo Sangre</td>
            <td>NSS</td>
            <td>Puesto</td>
        </tr>

        <?php 
            $conexion = conectar();
            $sql = "SELECT * from empleado";
            $result = mysqli_query($conexion,$sql);
            while($mostrar = mysqli_fetch_array($result)){
        ?>

            <tr>
                <td><?php echo $mostrar['nombre'] ?></td>
                <td><?php echo $mostrar['numeroCuenta'] ?></td>
                <td><?php echo $mostrar['numeroTarjeta'] ?></td>
                <td><?php echo $mostrar['direccion'] ?></td>
                <td><?php echo $mostrar['celular'] ?></td>
                <td><?php echo $mostrar['tipoSangre'] ?></td>
                <td><?php echo $mostrar['nss'] ?></td>
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