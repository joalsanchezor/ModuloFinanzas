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
            <form method="post" enctype="multipart/form-data">
                <h2>Agregar nueva prestación de ley</h2>
                <input type="text" id="nombrePrestacionLey" name="nombrePrestacionLey" placeholder="Nombre de la prestación de ley">
            </form>
        </div>
    </main>    
</body>