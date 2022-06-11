
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





/*================================================================================
==================================================================================
                                COMPONENTES HTML
==================================================================================
====================================================================================*/
    
//________________________
// HEADER ENCABEZADO
//________________________
//let boton_regresar = document.getElementById('boton_regresar');
let boton_menu = document.getElementById('boton_menu');
//let boton_filtro = document.getElementById('boton_filtro');
//let boton_imprimir = document.getElementById('boton_imprimir');
let boton_add = document.getElementById('boton_add');
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
let boton_modulo_finanzas = document.getElementById('boton_modulo_finanzas');


//________________________
// DESPLEGABLE OPCIONES
//________________________
//AQUI DEBEN PONERSE LOS BOTONES DEL MENÚ DESPLEGABLE
let boton_seccion_nomina = document.getElementById('boton_seccion_nomina');
let boton_seccion_reporte = document.getElementById('boton_seccion_reporte');
let boton_seccion_verEmpleados = document.getElementById('boton_seccion_verEmpleados');
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
let input_nombre = document.getElementById('');
let input_numeroCuenta = document.getElementById('');
let input_numeroTarjeta = document.getElementById('');
let input_direccion = document.getElementById('');
let input_celular = document.getElementById('');
let input_tipoSangre = document.getElementById('');
let input_nss = document.getElementById('');
let input_correo = document.getElementById('');
let input_password = document.getElementById('');
let select_puesto = document.getElementById('');

iframe.onload = () =>
{
    input_nombre = iframe.contentDocument.getElementById('nombre');
    input_numeroCuenta = iframe.contentDocument.getElementById('numeroCuenta');
    input_numeroTarjeta = iframe.contentDocument.getElementById('numeroTarjeta');
    input_direccion = iframe.contentDocument.getElementById('direccion');
    input_celular = iframe.contentDocument.getElementById('celular');
    input_tipoSangre = iframe.contentDocument.getElementById('tipoSangre');
    input_nss = iframe.contentDocument.getElementById('nss');
    input_correo = iframe.contentDocument.getElementById('correo');
    input_password = iframe.contentDocument.getElementById('password');
    select_puesto = iframe.contentDocument.getElementById('puesto');
};


//________________________
// ENLACES A OTRAS PAGINAS
//________________________
let a_nomina = document.getElementById("link_nomina" );
let a_reporte = document.getElementById("link_reporte" );
let a_verEmpleados = document.getElementById("link_verEmpleados" );
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
   // BOTON SECCION<Ver Empleado> del menu lateral
   boton_seccion_verEmpleados.onclick = () =>
   {
       a_verEmpleados.click();
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



    // SIMULACION DEL BOTON AGREGAR (ICONO QUE ESTA EN LA HEADER)
    boton_add.onclick = () =>
    {
        // PASO 1: OBTENER LOS DATOS INGRESADOS EN EL FORMULARIO
        let nombreE = input_nombre.value;
        let numCuentaE = input_numeroCuenta.value;
        let numTarjetaE = input_numeroTarjeta.value;
        let dirE = input_direccion.value;
        let celularE = input_celular.value;
        let tipoSangreE = input_tipoSangre.value;
        let nssE = input_nss.value;
        let correoE = input_correo.value;
        let passwordE = input_password.value;
        let id_puestoE = select_puesto.value;

        // PASO 2: PREPARAR EL ENVIO DE LOS DATOS AL SERVIDOR (ARCHIVO PHP)
        let datos = new FormData();
        datos.append( "nombreE" , nombreE );
        datos.append( "numCuentaE" , numCuentaE );
        datos.append( "numTarjetaE" , numTarjetaE );
        datos.append( "dirE" , dirE );
        datos.append( "celularE" , celularE );
        datos.append( "tipoSangreE" , tipoSangreE );
        datos.append( "nssE" , nssE );
        datos.append( "correoE" , correoE );
        datos.append( "passwordE" , passwordE );
        datos.append( "id_puestoE" , id_puestoE );

        // PASO 3:  INDICAR LA RUTA Y NOMBRE DEL ARCHIVO PHP
        //          QUE GESTIONARA Y RECIBIRA ESTOS DATOS
        let ruta = "agregar-manejo-empleado.php";

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
            // PASO 11: AQUI SE RECIBE LOS DATOS DE RESPUESTA DEL ARCHIVO PHP
            // de preferencia usen una variable de estatus siempre de envio

            // Si regresa por ejemplo <OK> quiere decir que no hubo problemas
            if( data.operacion == "OK" )
            {      
                alert("CORRECTO");
                a_verEmpleados.click();
                /*PASO 12: Si se realizo una consulta 
                for( let i = 0;  i < data.registros.length;  i++ )
                {
                    Se evalua cada registro devuelto
                    EJEMPLO:
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
    //Tooltip.inicializar( boton_regresar );
    Tooltip.inicializar( boton_menu );
    //Tooltip.inicializar( boton_filtro );
    Tooltip.inicializar( boton_add );
    //Tooltip.inicializar( boton_editar );
    //Tooltip.inicializar( boton_limpiar );
    //Tooltip.inicializar( boton_eliminar );




    //=========================== 
    // PERSONALIZAR LOS TOOLTIPS 
    // DEL HEADER ENCABEZADO
    //===========================
    //Tooltip.actualizar( boton_regresar , "bottom" , "Regresar" , 
    //"Volver a la pnatalla anterior" );

    Tooltip.actualizar( boton_menu , "bottom" , "Menu del Modulo Finanzas" , 
    "Ir a otros modulos, secciones o cerrar sesion" );

    //Tooltip.actualizar( boton_filtro , "bottom" , "Opciones de Filtro" , 
    //"Realiza una busqueda especifica, establece opciones de filtro o de ordenacion" );

    Tooltip.actualizar( boton_add , "bottom" , "Registrar empleado" , 
    "Registrar un nuevo empleado" );

    //Tooltip.actualizar( boton_editar , "bottom" , "Guardar Cambios" , 
    //"Guardar los cambios realizados" );

    //Tooltip.actualizar( boton_limpiar , "bottom" , "Descartar Cambios" , 
    //"Quitar los cambios realizados" );

    //Tooltip.actualizar( boton_eliminar , "bottom" , "Eliminar" , 
    //"Eliminar empleado seleccionado" );
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
function consultarEmpleados()
{
    let datos = new FormData();
    let ruta = "consultarEmpleados.php";
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
                    data.registros[i].idEmpleado ,
                    data.registros[i].nombre ,
                    data.registros[i].numeroCuenta ,
                    data.registros[i].numeroTarjeta ,
                    data.registros[i].direccion ,
                    data.registros[i].celular ,
                    data.registros[i].tipoSangre ,
                    data.registros[i].nss ,
                    data.registros[i].nombrePuesto ,
                    data.registros[i].correo
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



function agregarRowEmpleado( idEmpleado = 0 , nombre = "" , numCuenta = "" , numTarjeta = "" , 
    direccion = "" , celular = "" , tipoSangre = "" , nss = "" , nombrePuesto = "" , correo = "" )
{
    // CREACION DEL RENGLON <tr>
    let row = document.createElement( "tr" );
    row.id = idEmpleado;
    row.classList.add( "row" );
    tablaEmpleado.append( row );

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

    let celdaNumCuenta = document.createElement( "td" );
    celdaNumCuenta.innerHTML = numCuenta;
    row.append( celdaNumCuenta );

    let celdaNumTarjeta = document.createElement( "td" );
    celdaNumTarjeta.innerHTML = numTarjeta;
    row.append( celdaNumTarjeta );

    let celdaDireccion = document.createElement( "td" );
    celdaDireccion.innerHTML = direccion;
    row.append( celdaDireccion );

    let celdaCelular = document.createElement( "td" );
    celdaCelular.innerHTML = celular;
    row.append( celdaCelular );

    let celdaSangre = document.createElement( "td" );
    celdaSangre.innerHTML = tipoSangre;
    row.append( celdaSangre );

    let celdaNSS = document.createElement( "td" );
    celdaNSS.innerHTML = nss;
    row.append( celdaNSS );

    let celdaPuesto = document.createElement( "td" );
    celdaPuesto.innerHTML = nombrePuesto;
    row.append( celdaPuesto );

    let celdaCorreo = document.createElement( "td" );
    celdaCorreo.innerHTML = correo;
    row.append( celdaCorreo );

    // DISEÑO PREVIO DEL HTML
    /*
    <tr class = "row">
        <td>Alfonso Aldair Rangel Cantabrana</td>
        <td>123456789</td>
        <td>112233445566</td>
        <td>#234</td>
        <td>311-213-22-66</td>
        <td>A+</td>
        <td>12345566778899</td>
        <td>Supervisor de Obra</td>
        <td>correo1@hotmail.com</td>
    </tr>
    */
}






/*============================================================================
            MAIN
==============================================================================*/
generarMenuLateral( panel_menu );
generarDesplegableExpandible( desplegable_menu );
set_eventos();
set_tooltips();




