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
            <form action="agregar-manejo-puesto.php" method="post" enctype="multipart/form-data">
                <h2>Ingresar Datos del Puesto</h2>
                <input type="text" id="nombre-puesto" name="nombre-puesto" placeholder="Nombre del puesto">
                <input type="number" id="sueldo" name="sueldo"  placeholder="Sueldo">

                <!-- <input type="submit" class="boton" value="Agregar" name="agregar">      
                <a href="ver-puestos.php" class="boton">Ver Puestos</a>       -->
                
                <!-- <input type="reset" class="boton" value="Cancelar" name="cancelar">  
                <input type="submit" class="boton" value="Ver puestos" name="verPuestos">           -->
            </form>
        </div>
    </main>    
</body>