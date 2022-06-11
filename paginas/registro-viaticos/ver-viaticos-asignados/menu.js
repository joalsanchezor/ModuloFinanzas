
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
                                VARIABLES
==================================================================================
====================================================================================*/

let row_empleadoSeleccionado = document.getElementById('');
let row_viaticoSeleccionado = document.getElementById('');



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
let boton_eliminar = document.getElementById('boton_eliminar');
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

let tablaViaticoNoComprobado = document.getElementById('');

// OBTENER REFERENCIA A SUS ELEMENTOS HTML



iframe.onload = () =>
{
    tablaViaticoNoComprobado = iframe.contentDocument.getElementById('tablaViaticoNoComprobado');
    consultarViaticos();
};

//________________________
// ENLACES A OTRAS PAGINAS
//________________________
let a_regresarAsignarViatico= document.getElementById( "link_regresarAsignarViatico" );

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
    boton_regresar.onclick = () =>
    {
        a_regresarAsignarViatico.click();
    };

    boton_eliminar.onclick = () =>
    {
        if(row_empleadoSeleccionado != null){
            if(alerta() == "Aceptar")
            {
                //alert("Eliminando"+row_empleadoSeleccionado.id);
                let datos = new FormData();
                datos.append( "idAsignarViatico" , row_empleadoSeleccionado.id);

                let ruta = "eliminar-viatico.php";

                // PASO 4: ENVIAR LOS DATOS AL ARCHIVO PHP
                fetch( ruta , { method: "POST" , body: datos } )
                .then( ( response ) => 
                {  
                    return response.json(); 
                })
                .then( ( data ) =>
                {
                    if( data.operacion == "OK" )
                    {      
                        alert("REGISTRO ELIMINADO");
                        window.location.reload(); 
                    }
                    else
                    {
                        alert( data.operacion );
                    }
                })
                .catch( ( err ) => { alert(err) });   
            }else{
                //alert("Cancelando");
            }
        }else{
            alert("Debes seleccionar un registro de la tabla");
        }
    };
}



/*==================================================================================
====================================================================================         
                            DECLARACION DE METODOS
====================================================================================
====================================================================================*/

function alerta()
    {
    var mensaje;
    var opcion = confirm("¿Desea continuar con la eliminación?");
    if (opcion == true) {
        mensaje = "Aceptar";
	} else {
	    mensaje = "Cancelar";
	}
    return mensaje;
	//document.getElementById("ejemplo").innerHTML = mensaje;
}

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
    Tooltip.inicializar( boton_eliminar );



    //=========================== 
    // PERSONALIZAR LOS TOOLTIPS 
    // DEL HEADER ENCABEZADO
    //===========================

    Tooltip.actualizar( boton_menu , "bottom" , "Menu del Modulo Inventario" , 
    "Ir a otros modulos, secciones o cerrar sesion" );

    Tooltip.actualizar( boton_regresar , "bottom" , "Regresar a la pantalla anterior" , 
    "Volver a Asignar Viático" );

    Tooltip.actualizar( boton_eliminar , "bottom" , "Eliminar viático" , 
    "Eliminación del viático seleccionado de manera permanente" );
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


//=====================================
//    OBTENER LISTA DE VIATICOS DESDE LA BD
//=====================================
function consultarViaticos()
{
    let datos = new FormData();
    let ruta = "consultar-viaticos.php";
    fetch( ruta , { method: "POST" , body: datos } )
    .then( ( response ) => 
    {  
        return response.json(); 
    })
    .then( ( data ) =>
    {
        if( data.operacion == "OK" )
        {       
            for( let i = 0;  i < data.registros.length;  i++ )
            {
                //console.log( data.registros[i] );
                agregarRowViatico
                (  
                    data.registros[i].idEmpleado ,
                    data.registros[i].idAsignarViatico ,
                    data.registros[i].nombre,
                    data.registros[i].concepto ,
                    data.registros[i].fecha ,
                    data.registros[i].cantidad ,
                    data.registros[i].comprobado
                );
            }
        }
        else
        {
            alert( data.operacion );
        }
    })
    .catch( ( err ) => { alert(err) }); 
}


function agregarRowViatico( idEmpleado = 0, idViatico=0,nombre = "" , concepto = "" , fecha = "" , cantidad = 0 , comprobado = "")
{ 
    // CREACION DEL RENGLON <tr>
    let row = document.createElement("tr");
    row.id = idViatico;//idEmpleado;
    row.classList.add( "row" );
    tablaViaticoNoComprobado.append( row );

    // EFECTO HOVER AZUL
    row.onmouseover = () =>
    {
        let seleccionado = false;
        row.classList.forEach( ( clase ) =>
        {
            if( clase == "rowSeleccionado" ) { seleccionado = true;  return; }
        });
        if( seleccionado == true ){ return;  }
        row.classList.add( "rowHover" );
    };

    // QUITAR EFECTO HOVER AZUL
    row.onmouseout = () =>
    {
        row.classList.forEach( ( clase ) =>
        {
            if( clase == "rowHover" ) 
            { 
                row.classList.remove( "rowHover" );
                return; 
            }
        });
    };

    // SELECCION RENGLON
    row.onclick = () =>
    {
        let seleccionado = false;
        row.classList.forEach( ( clase ) =>
        {
            if( clase == "rowSeleccionado" ) 
            { 
                seleccionado = true;
                row.classList.remove( "rowSeleccionado" );
                row.classList.add( "rowHover" );
                row_empleadoSeleccionado = null;
                return; 
            }
        });
        if( seleccionado == true ) {  return;  }

        row.classList.remove( "rowHover" );
        if( row_empleadoSeleccionado != null )
        {
            row_empleadoSeleccionado.classList.remove( "rowSeleccionado" );
        }
        row.classList.add( "rowSeleccionado" );
        row_empleadoSeleccionado = row;
    };

    // CELDAS
    let celdaNombre = document.createElement( "td" );
    celdaNombre.innerHTML = nombre;
    row.append( celdaNombre );

    let celdaConcepto = document.createElement( "td" );
    celdaConcepto.innerHTML = concepto;
    row.append( celdaConcepto );

    let celdaFecha = document.createElement( "td" );
    celdaFecha.innerHTML = fecha;
    row.append( celdaFecha );

    let celdaCantidad = document.createElement( "td" );
    celdaCantidad.innerHTML = cantidad;
    row.append( celdaCantidad );

    // let celdaComprobado = document.createElement( "td" );
    // celdaComprobado.innerHTML = comprobado;
    // row.append( celdaComprobado );
}


/*============================================================================
            MAIN
==============================================================================*/
generarMenuLateral( panel_menu );
generarDesplegableExpandible( desplegable_menu );
set_eventos();
set_tooltips();