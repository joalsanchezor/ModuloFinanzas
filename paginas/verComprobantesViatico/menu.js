
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








/*================================================================================
==================================================================================
                                COMPONENTES HTML
==================================================================================
====================================================================================*/
    
//________________________
// HEADER ENCABEZADO
//________________________
let boton_regresar = document.getElementById('boton_regresar');
let boton_menu = document.getElementById('boton_menu');
//let boton_filtro = document.getElementById('boton_filtro');
//let boton_imprimir = document.getElementById('boton_imprimir');
// let boton_add = document.getElementById('boton_add');
//let boton_editar = document.getElementById('boton_editar');
//let boton_limpiar = document.getElementById('boton_limpiar');
//let boton_eliminar = document.getElementById('boton_eliminar');
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
let boton_modulo_inventario = document.getElementById('boton_modulo_inventario');


//________________________
// DESPLEGABLE OPCIONES
//________________________
//AQUI DEBEN PONERSE LOS BOTONES DEL MENÚ DESPLEGABLE
let boton_seccion_nomina = document.getElementById('boton_seccion_nomina');
let boton_seccion_reporte = document.getElementById('boton_seccion_reporte');
let boton_seccion_verEmpleados = document.getElementById('boton_seccion_verEmpleados')
let boton_seccion_agregarEmpleados = document.getElementById('boton_seccion_agregarEmpleados');
let boton_seccion_prestamos = document.getElementById('boton_seccion_prestamos');
let boton_seccion_percepciones = document.getElementById('boton_seccion_percepciones');
let boton_seccion_viaticos = document.getElementById('boton_seccion_viaticos');
let boton_seccion_servicios = document.getElementById('boton_seccion_servicios');
let boton_seccion_notificaciones = document.getElementById('boton_seccion_notificaciones');
let boton_seccion_puestos = document.getElementById('boton_seccion_puestos');
let boton_seccion_solicitud = document.getElementById('boton_seccion_solicitud');



// PAGINA DE CONTENIDO SIN MATERIALIZE
let iframe = document.getElementById('contenedor_principal');


// OBTENER REFERENCIA A SUS ELEMENTOS HTML
/*let input_nombre = document.getElementById('');
let input_numeroCuenta = document.getElementById('');
let input_numeroTarjeta = document.getElementById('');
let input_direccion = document.getElementById('');
let input_celular = document.getElementById('');
let input_tipoSangre = document.getElementById('');
let input_nss = document.getElementById('');
let select_puesto = document.getElementById('');*/
let tablaViaticosComprobados = document.getElementById('');

iframe.onload = () =>
{
    tablaViaticosComprobados = iframe.contentDocument.getElementById('tablaViaticosComprobados');
    consultarViaticosComprobados();
    /*input_nombre = iframe.contentDocument.getElementById('nombre');
    input_numeroCuenta = iframe.contentDocument.getElementById('numeroCuenta');
    input_numeroTarjeta = iframe.contentDocument.getElementById('numeroTarjeta');
    input_direccion = iframe.contentDocument.getElementById('direccion');
    input_celular = iframe.contentDocument.getElementById('celular');
    input_tipoSangre = iframe.contentDocument.getElementById('tipoSangre');
    input_nss = iframe.contentDocument.getElementById('nss');
    select_puesto = iframe.contentDocument.getElementById('puesto');*/
};


//________________________
// ENLACES A OTRAS PAGINAS
//________________________
let a_regresar = document.getElementById( "link_regresar" );
let a_nomina = document.getElementById("link_nomina" );
let a_reporte = document.getElementById("link_reporte" );
let a_verEmpleados = document.getElementById("link_verEmpleados" );
let a_agregarEmpledos = document.getElementById("link_agregarEmpleados" );
let a_prestamos = document.getElementById("link_prestamos" );
let a_percepciones = document.getElementById("link_percepciones" );
let a_viaticos = document.getElementById("link_viaticos" );
let a_pagoS = document.getElementById("link_pagoS" );
let a_notificaciones = document.getElementById("link_notificaciones" );
let a_puestos = document.getElementById("link_puestos" );
let a_solicitud = document.getElementById("link_solicitudes" );



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


    // BOTON SECCION <AGREGAR EMPLEADO> BOTON DEL HEADER
    boton_regresar.onclick = () => 
    {
        a_regresar.click();
    };

    // BOTON SECCION<Nomina> del menu lateral
    boton_seccion_nomina.onclick = () =>
    {
        a_nomina.click();
    };
    // BOTON SECCION<Reporte> del menu lateral
    boton_seccion_reporte.onclick = () =>
    {
        a_reporte.click();
    };

    // BOTON SECCION<Ver empleados> del menu lateral
    boton_seccion_verEmpleados.onclick = () =>
    {
        a_verEmpleados.click();
    };
    // BOTON SECCION<Agregar Empleado> del menu lateral
    boton_seccion_agregarEmpleados.onclick = () =>
    {
        a_agregarEmpledos.click();
    };
    // BOTON SECCION<Prestamos> del menu lateral
    boton_seccion_prestamos.onclick = () =>
    {
        a_prestamos.click();
    };
    // BOTON SECCION<prestaciones> del menu lateral
    boton_seccion_percepciones.onClick = () =>
    {
        a_percepciones.click();
    };

    // BOTON SECCION<Viaticos> del menu lateral
    boton_seccion_viaticos.onclick = () =>
    {
        a_viaticos.click();
    };

    // BOTON SECCION<Pagos Servicios> del menu lateral
    boton_seccion_servicios.onclick = () =>
    {
        a_pagoS.click();
    };
    // BOTON SECCION<Notificaciones> del menu lateral
    boton_seccion_notificaciones.onclick = () =>
    {
        a_notificaciones.click();
    };

    // BOTON SECCION<Puestos> del menu lateral
    boton_seccion_puestos.onclick = () =>
    {
        a_puestos.click();
    };

    // BOTON SECCION<Solicitudes de pago> del menu lateral
    boton_seccion_solicitud.onclick = () =>
    {
        a_solicitud.click();
    };

    // EVENTO ELIMINAR EMPLEADO
    // boton_eliminar.onclick = () =>
    // {
        
    // };
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
    Tooltip.inicializar( boton_regresar );
    Tooltip.inicializar( boton_menu );
    
    //Tooltip.inicializar( boton_filtro );
    // Tooltip.inicializar( boton_add );
    //Tooltip.inicializar( boton_editar );
    //Tooltip.inicializar( boton_limpiar );
    //Tooltip.inicializar( boton_eliminar );




    //=========================== 
    // PERSONALIZAR LOS TOOLTIPS 
    // DEL HEADER ENCABEZADO
    //===========================
    Tooltip.actualizar( boton_regresar , "bottom" , "Regresar" , 
    "Volver a la pantalla anterior" );

    Tooltip.actualizar( boton_menu , "bottom" , "Menu del Modulo Finanzas" , 
    "Ir a otros modulos, secciones o cerrar sesion" );


    //Tooltip.actualizar( boton_filtro , "bottom" , "Opciones de Filtro" , 
    //"Realiza una busqueda especifica, establece opciones de filtro o de ordenacion" );

    // Tooltip.actualizar( boton_add , "bottom" , "Agregar nuevo empleado" , 
    // "Registrar un nuevo empleado" );

    // Tooltip.actualizar( boton_editar , "bottom" , "Guardar Cambios" , 
    // "Guardar los cambios realizados" );

    //Tooltip.actualizar( boton_limpiar , "bottom" , "Descartar Cambios" , 
    //"Quitar los cambios realizados" );

    // Tooltip.actualizar( boton_eliminar , "bottom" , "Eliminar" , 
    // "Eliminar empleado seleccionado" );


    
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
//    OBTENER LISTA DE EMPLEADOS DESDE LA BD
//=====================================
function consultarViaticosComprobados()
{
    let datos = new FormData();
    let ruta = "consultarViaticosComprobados.php";
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
                agregarRowEmpleado
                (  
                    data.registros[i].nombre ,
                    data.registros[i].concepto ,
                    data.registros[i].fecha ,
                    data.registros[i].idComprobarViatico ,
                    data.registros[i].cantidad ,
                    data.registros[i].imagenComprobante ,
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



function agregarRowEmpleado( nombre = "" , concepto = "" , fecha = "", idComprobarViatico = 0 , cantidad = 0 , 
imagenComprobante = "")
{
    // CREACION DEL RENGLON <tr>
    let row = document.createElement("tr");
    row.id = idComprobarViatico;
    row.classList.add( "row" );
    tablaViaticosComprobados.append( row );

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
        if( seleccionado == true ) {   return;  }

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

    let celdaBotonAceptar = document.createElement( "td" );
    celdaBotonAceptar.classList.add( "celdaBoton" );
    row.appendChild( celdaBotonAceptar );

    let botonAceptar = document.createElement( "div" );
    botonAceptar.classList.add( "boton" );
    botonAceptar.innerHTML = "ABRIR IMAGEN";
    botonAceptar.onclick = () =>
    {
        //alert( "ABRIENDO IMAGEN ::" + imagenComprobante );
        //abrir imagen en otra ventana 
        /*
            
        */
        window.open(imagenComprobante, "COMPROBANTE DE VIÁTICO", "width=300, height=200")
    }
    celdaBotonAceptar.appendChild( botonAceptar );
}






/*============================================================================
            MAIN
==============================================================================*/
generarMenuLateral( panel_menu );
generarDesplegableExpandible( desplegable_menu );
set_eventos();
set_tooltips();




