
class Tooltip 
{
    static inicializar( elementoHTML = document.body )
    {
        elementoHTML.setAttribute( "data-html" , "true" );
        let ajustes =
        {
            exitDelay: 0 ,	
            enterDelay: 200 ,	
            html: "true" ,	
            margin: 3 ,	
            inDuration: 300 ,
            outDuration: 250 , 
            position: "top" ,	
            transitionMovement:	15	
        };
        M.Tooltip.init( elementoHTML , ajustes );
    }


    static actualizar( elementoHTML = document.body , posicion , titulo , subtitulo )
    {
        elementoHTML.setAttribute( "data-tooltip" , 
        "<label style = 'color:#5c1717; font-weight: 700;'>" + titulo + "</label>" +
        "<label style = 'font-size:19px;'>" + subtitulo + "</label>" );
    
        elementoHTML.setAttribute( "data-position" , posicion );
    }
}







/*================================================================================
==================================================================================
                                COMPONENTES HTML
==================================================================================
====================================================================================*/
    
//________________________
// HEADER ENCABEZADO
//________________________
let boton_menu = document.getElementById('boton_menu');
let boton_regresar = document.getElementById('boton_regresar');
let boton_add = document.getElementById('boton_add');
let eti_pantalla = document.getElementById('eti_pantalla');
 

//________________________
// PANEL LATERAL MENU
//________________________
let panel_menu = document.getElementById('panel_menu');
let desplegable_menu = document.getElementById('desplegable_menu');


//________________________
// DESPLEGABLE CUENTA
//________________________
let boton_salir = document.getElementById('boton_salir');
let boton_modulo_obras = document.getElementById('boton_modulo_obras');
let boton_modulo_finanzas = document.getElementById('boton_modulo_finanzas');


//________________________
// DESPLEGABLE OPCIONES
//________________________
let boton_catalogo = document.getElementById('boton_catalogo');
let boton_mantenimientos = document.getElementById('boton_mantenimientos');
let boton_seguros = document.getElementById('boton_seguros');
let boton_notificaciones = document.getElementById('boton_notificaciones');
let boton_agregar_articulo = document.getElementById('boton_agregar_articulo');
let boton_solicitud = document.getElementById('boton_solicitud');

//________________________
// DESPLEGABLE OPCIONES
//________________________
//AQUI DEBEN PONERSE LOS BOTONES DEL MEN?? DESPLEGABLE
let boton_seccion_agregarEmpleado = document.getElementById('boton_seccion_agregarEmpleado');


// PAGINA DE CONTENIDO SIN MATERIALIZE
let iframe = document.getElementById('contenedor_principal');

// OBTENER REFERENCIA A SUS ELEMENTOS HTML
let input_nombrePuesto = document.getElementById('');
let input_sueldo = document.getElementById('');


iframe.onload = () =>
{
    input_nombrePuesto = iframe.contentDocument.getElementById('nombre-puesto');
    input_sueldo = iframe.contentDocument.getElementById('sueldo');
};

//________________________
// ENLACES A OTRAS PAGINAS
//________________________
let a_verPuestos = document.getElementById( "link_verPuestos" );

/*==================================================================================
/*==================================================================================
                        COMPONENTES MATERIALIZE.CSS
/*==================================================================================
====================================================================================*/

//________________________
// VENTANA MODAL
//________________________
function generar_modal( elementoHTML = document.getElementById(''))
{
    let opciones = 
    {
        opacity:	0.6 ,	 // opacidad
        inDuration:	350 ,	 // transicion de entrada
        outDuration: 350 , // transicion de salida
        preventScrolling: true ,	// evitar que la pagina se desplace con modal abierto
        dismissible: false , // Permitir que el modal sea cerrado por el teclado o el clic
        startingTop: '-40%' ,	// desplazamiento superior inicial
        endingTop:	'15%' // desplazamiento superior inicial
    };
    return M.Modal.init( elementoHTML , opciones );
}


//________________________
// PANEL LATERAL MENU
//________________________
function generarMenuLateral( elementoHTML = document.getElementById('') )
{
    let ajustes =
    { 
        edge: 'left' ,	   // en que lado aparece el sidenav
        draggable:	true ,	
        inDuration:	250 ,	
        outDuration: 200	
    };
    M.Sidenav.init( elementoHTML , ajustes );
}


//________________________
// DESPLEGABLE EXPANDIBLE
//________________________
function generarDesplegableExpandible( elementoHTML = document.getElementById('') )
{
    let ajustes =
    {
        accordion: false ,	
        inDuration:	250 ,	
        outDuration: 200	
    };
    M.Collapsible.init( elementoHTML , ajustes );
}


//________________________
// DESPLEGABLE ACORDION
//________________________
function generarDesplegableAcordion( elementoHTML = document.getElementById('') )
{
    let ajustes =
    {	
        inDuration:	250 ,	
        outDuration: 200	
    };
    M.Collapsible.init( elementoHTML , ajustes );
}



//________________________
// CONTENEDOR DE PESTA??AS (TABS)
//________________________
function generarTabs( elementoHTML = document.getElementById('') )
{
    let ajustes =
    {	
        duration: 300 ,
        swipeable: false,
        responsiveThreshold: Infinity
    };
    M.Tabs.init( elementoHTML , ajustes );
}


/*==================================================================================
====================================================================================
                            DECLARACION DE EVENTOS
====================================================================================
====================================================================================*/
function set_eventos( )
{
    // BOTON ICONO MENU
    boton_menu.onclick = () => M.Sidenav.getInstance( panel_menu ).open();

    boton_regresar.onclick = () =>
    {
        window.location.reload();
        a_verPuestos.click();
    }

    // SIMULACION DEL BOTON AGREGAR (ICONO QUE ESTA EN LA HEADER)
    boton_add.onclick = () =>
    {
        // PASO 1: OBTENER LOS DATOS INGRESADOS EN EL FORMULARIO
        let nombrePuestoE = input_nombrePuesto.value;
        let sueldoE = input_sueldo.value;

        // PASO 2: PREPARAR EL ENVIO DE LOS DATOS AL SERVIDOR (ARCHIVO PHP)
        let datos = new FormData();
        datos.append( "nombrePuestoE" , nombrePuestoE );
        datos.append( "sueldoE" , sueldoE );

        // PASO 3:  INDICAR LA RUTA Y NOMBRE DEL ARCHIVO PHP
        //          QUE GESTIONARA Y RECIBIRA ESTOS DATOS
        let ruta = "agregar-manejo-puesto.php";

        // PASO 4: ENVIAR LOS DATOS AL ARCHIVO PHP
        fetch( ruta , { method: "POST" , body: datos } )
        .then( ( response ) => 
        {  
            // AQUI CUANDO RECIBAN DATOS DEBE PONERSE "response.json"
            // Si  ven que no ocurre nada ... deben ir a inspeccionar la pagina
            // elegir la pesta??a Console 
            // si les aparece el error token json ... entonces deben cambiar a
            // response.text();
            // para que vean el error
            //console.log( response.text() );
            // Una vez que lo corrijan cambian de nuevo a response.json()
            return response.json(); 
        })
        .then( ( data ) =>
        {
            //console.log(data);
            //return;
            // PASO 11: AQUI SE RECIBE LOS DATOS DE RESPUESTA DEL ARCHIVO PHP
            // de preferencia usen una variable de estatus siempre de envio

            // Si regresa por ejemplo <OK> quiere decir que no hubo problemas
            if( data.operacion == "OK" )
            {      
                alert("CORRECTO");
                //CODIGO PARA REFRESCAR P??GINA 
                window.location.reload();
                a_verPuestos.click();
                //PASO 12: Si se realizo una consulta 
                /*for( let i = 0;  i < data.registros.length;  i++ )
                {
                    //Se evalua cada registro devuelto
                    //EJEMPLO:
                    input_nombre.value = data.registros[i].clave1;

                }*/
            }
            else
            {
                alert( data.operacion );
            }
        })
        .catch( ( err ) => { alert(err) });   
    };
}


/*==================================================================================
====================================================================================         
                            DECLARACION DE METODOS
====================================================================================
====================================================================================*/
function getBase64Image( img = document.getElementById("") ) 
{
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL();
    return dataURL;
}




/*_______________________________
    ESTABLECER LOS TOOLTIPS
_________________________________*/
function set_tooltips( )
{
    //=========================== 
    // CREACION DE LOS TOOLTIPS 
    // DEL HEADER ENCABEZADO
    //===========================
    Tooltip.inicializar( boton_menu );
    Tooltip.inicializar( boton_regresar );
    Tooltip.inicializar( boton_add );


    //=========================== 
    // PERSONALIZAR LOS TOOLTIPS 
    // DEL HEADER ENCABEZADO
    //===========================
    Tooltip.actualizar( boton_menu , "bottom" , "Menu del Modulo Inventario" , 
    "Ir a otros modulos, secciones o cerrar sesion" );

    Tooltip.actualizar( boton_regresar , "bottom" , "Regresar a la p??gina anterior" , 
    "Ir a la p??gina de la tabla de puestos" );

    Tooltip.actualizar( boton_add , "bottom" , "Registrar Puesto" , 
    "Registrar del puesto de trabajo en la base de datos" );
    
}





function ponerOculto( elementoHTML = document.getElementById("") , indicacion = "" )
{
    if( indicacion == "SI" )
    {
        elementoHTML.style.position = "absolute";
        elementoHTML.style.left = "110%";
    }
    else
    {
        elementoHTML.style.position = "relative";
        elementoHTML.style.left = "0%";
    }
}







/*============================================================================
            MAIN
==============================================================================*/
generarMenuLateral( panel_menu );
generarDesplegableExpandible( desplegable_menu );
set_eventos();
set_tooltips();




