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
            <form action="agregar-manejo-pago.php" method="post" enctype="multipart/form-data">
                <h2>Agregar Nuevo Pago</h2>
                <input type="text" id="nombrePago" name="nombrePago" placeholder="Nombre del pago">
                <label for="fechaInicio">Fecha Inicial:</label>
                <input type="date" id="fechaInicio" name="fechaInicio" >
                <label for="fechaFinal">Fecha Final:</label>
                <input type="date" id="fechaFinal" name="fechaFinal">
                <label for="periodo">Seleccione el periodo en que se realiza el pago:</label>
                    <select name="periodo" id="periodo">
                        <option value="unico">Una sola vez</option>
                        <option value="semanal">Semanal</option>
                        <option value="mensual">Mensual</option>
                        <option value="bimestral">Bimestral</option>
                        <option value="anual">Anual</option>
                    </select> 
                <input type="submit" class="boton" value="Agregar" name="agregar">            
                <input type="reset" class="boton" value="Cancelar" name="cancelar">
            </form>
        </div>
    </main>    
</body>