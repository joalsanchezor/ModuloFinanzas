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
            <form action="agregar-manejo-empleado.php" method="post" enctype="multipart/form-data">
                <h2>Ingresar Datos del Empleado</h2>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre Completo">
                <input type="text" id="numeroCuenta" name="numeroCuenta" placeholder="Número de cuenta a 18 dígitos">
                <input type="text" id="numeroTarjeta" name="numeroTarjeta" placeholder="Número de Tarjeta a 16 dígitos">
                <input type="text" id="direccion" name="direccion" placeholder="Dirección">
                <input type="text" id="celular" name="celular" placeholder="Celular">
                <input type="text" id="tipoSangre" name="tipoSangre" placeholder="Tipo de Sangre">
                <input type="text" id="nss" name="nss" placeholder="NSS a 11 dígitos">
                <select name="puesto" id="puesto">
                        <option value="0">Seleccione el puesto:</option>
                        <?php 
                            $conexion = conectar();

                            $query = "SELECT idPuesto, nombrePuesto, sueldo FROM puesto";
                            $resultado = mysqli_query($conexion, $query);

                            while($valores = mysqli_fetch_array($resultado)){
                                echo '<option value="'.$valores[idPuesto].'">'.$valores[nombrePuesto].'</option>';
                                //echo '<label>'.$valores[sueldo].'</label>';
                            }
                        ?>
                </select>   
                <input type="email" id="correo" name="correo" placeholder="Ingrese correo electrónico">
                <input type="text" id="password" name="password" placeholder="Ingrese una contraseña">
                <!-- <input type="submit" class="boton" value="Agregar" name="agregar">            
                <a href="ver-empleados.php" class="boton">Ver Empleados</a> -->
                <!-- <input type="reset" class="boton" value="Cancelar" name="cancelar">   -->
                <!-- <input type="submit" class="boton" value="Ver empleados" name="verEmpleados">           -->
            </form>
        </div>
    </main>    
</body>