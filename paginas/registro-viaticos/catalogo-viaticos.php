<?php
    include('includes/utilerias.php');
    
    
    session_start();

   // include('includes/encabezado.php');
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "estilo.css">
</head>
<body>
    <main>
        <div class="formulario-div">
            <form action="agregar-manejo-viatico.php" method="post" enctype="multipart/form-data">
                <h2>Agregar Nuevo Viático</h2>
                <label>Concepto de viático:</label>
                <input type="text" id="concepto" name="concepto">          
            </form>
        </div>
    </main>    
</body>