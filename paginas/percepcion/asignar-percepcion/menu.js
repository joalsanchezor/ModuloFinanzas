
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
// let boton_regresar = document.getElementById('boton_regresar');
let boton_menu = document.getElementById('boton_menu');
let boton_add = document.getElementById('boton_add'); 
let boton_ver = document.getElementById('boton_ver');
let boton_agregarPercepcion = document.getElementById('boton_agregarPercepcion');
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


// PAGINA DE CONTENIDO SIN MATERIALIZE
let iframe = document.getElementById('contenedor_principal');


// OBTENER REFERENCIA A SUS ELEMENTOS HTML
let input_idEmpleado = document.getElementById('');
let input_idTipoPercepcion = document.getElementById('');
let input_cantidad = document.getElementById('');

iframe.onload = () =>
{
    input_idEmpleado = iframe.contentDocument.getElementById('empleado');
    input_idTipoPercepcion = iframe.contentDocument.getElementById('tipoPercepcion');
    input_cantidad = iframe.contentDocument.getElementById('cantidad');
};

//________________________
// ENLACES A OTRAS PAGINAS
//________________________
let a_crearPercepcion = document.getElementById( "link_crearPercepcion" );



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
// CONTENEDOR DE PESTAÑAS (TABS)
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

    boton_agregarPercepcion.onclick = () =>
    {
        a_crearPercepcion.click();
    }

    // SIMULACION DEL BOTON AGREGAR (ICONO QUE ESTA EN LA HEADER)
    boton_add.onclick = () =>
    {
        // PASO 1: OBTENER LOS DATOS INGRESADOS EN EL FORMULARIO
        let idEmpleado = input_idEmpleado.value;
        let idTipoPercepcion = input_idTipoPercepcion.value;
        let cantidad = input_cantidad.value;

        if(idEmpleado == 0 || idTipoPercepcion == 0 || cantidad < 0)
        {
            alert("EL CAMPO NO DEBE ESTAR VACÍO Y NO DEBE SER MENOR A 0");
            return;
        }

        // PASO 2: PREPARAR EL ENVIO DE LOS DATOS AL SERVIDOR (ARCHIVO PHP)
        let datos = new FormData();
        datos.append( "idEmpleado" , idEmpleado );
        datos.append( "idTipoPercepcion" , idTipoPercepcion );
        datos.append( "cantidad" , cantidad );
        // PASO 3:  INDICAR LA RUTA Y NOMBRE DEL ARCHIVO PHP
        //          QUE GESTIONARA Y RECIBIRA ESTOS DATOS
        let ruta = "asignar-percepcion.php";

        // PASO 4: ENVIAR LOS DATOS AL ARCHIVO PHP
        fetch( ruta , { method: "POST" , body: datos } )
        .then( ( response ) => 
        {  
            // AQUI CUANDO RECIBAN DATOS DEBE PONERSE "response.json"
            // Si  ven que no ocurre nada ... deben ir a inspeccionar la pagina
            // elegir la pestaña Console 
            // si les aparece el error token json ... entonces deben cambiar a
            // response.text();
            // para que vean el error
            //console.log( response.text() );
            // Una vez que lo corrijan cambian de nuevo a response.json()
            return response.json(); 
        })
        .then( ( data ) =>
        {
            //alert(data);
            //return;
            // PASO 11: AQUI SE RECIBE LOS DATOS DE RESPUESTA DEL ARCHIVO PHP
            // de preferencia usen una variable de estatus siempre de envio

            // Si regresa por ejemplo <OK> quiere decir que no hubo problemas
            if( data.operacion == "OK" )
            {      
                alert("CORRECTO");
                //CODIGO PARA REFRESCAR PÁGINA 
                window.location.reload();
                location.reload();
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
    // Tooltip.inicializar( boton_regresar );
    Tooltip.inicializar( boton_menu );
    Tooltip.inicializar( boton_add );
    Tooltip.inicializar( boton_ver );
    Tooltip.inicializar( boton_agregarPercepcion );

    //=========================== 
    // PERSONALIZAR LOS TOOLTIPS 
    // DEL HEADER ENCABEZADO
    //===========================
    // Tooltip.actualizar( boton_regresar , "bottom" , "Regresar" , 
    // "Volver a la pantalla anterior" );

    Tooltip.actualizar( boton_menu , "bottom" , "Menu del Modulo Inventario" , 
    "Ir a otros modulos, secciones o cerrar sesion" );


    Tooltip.actualizar( boton_add , "bottom" , "Asignar percepción a empleado" , 
    "Asignación de la percepción al empleado" );

    Tooltip.actualizar( boton_agregarPercepcion , "bottom" , "Agregar nueva percepción" , 
    "Agregar nueva percepción al catálogo" );

    Tooltip.actualizar( boton_ver , "bottom" , "Ver percepciones asignadas" , 
    "Ver listado de percepciones asignadas" );
    
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




