<?php
    include('includes/utilerias.php');
    
    session_start();
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "estilo.css">
    <script src = "menu.js" defer></script>
</head>
<body>
    <main>
        <div class="formulario-div">
            <form method="post" enctype="multipart/form-data">
                <h2>Préstamo a empleado</h2>
                <select name="empleado" id="empleado"  onchange="empleadoSeleccionado()">
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
                <label>CANTIDAD A PRESTAR AL EMPLEADO: </label> 
                <input disabled type="number" min="1" pattern="^[0-9]+" id="cantidad" name="cantidad" placeholder="Cantidad del préstamo" oninput="cantidadColocada()">  
                <input type="date" id="fecha"name='fecha' placeholder="Fecha cuando se realiza el préstamo">
                <label>Plazo de pago: </label> 
                <input type="text" id="plazoPago" name="plazoPago" readonly>
                <label>Descuento en nómina: </label>
                <input type="text" id="descuento" name="descuento" readonly>
                <label>Resumen del préstamo: </label>
                <input type="text" id="resultado" name="resultado" readonly>
            </form>
        </div>
    </main>    
</body>