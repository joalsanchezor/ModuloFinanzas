
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
let boton_regresar = document.getElementById('boton_regresar');
let boton_menu = document.getElementById('boton_menu');
let boton_add = document.getElementById('boton_add');
let boton_ver = document.getElementById('boton_ver');
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
let select_empleado = document.getElementById('');
let select_viatico = document.getElementById('');
let input_cantidad = document.getElementById('');
let input_fecha = document.getElementById('');
let input_imagen = document.getElementById('');

let label_costoAsignado = document.getElementById('');

iframe.onload = () =>
{
    select_empleado = iframe.contentDocument.getElementById('empleado');
    select_viatico = iframe.contentDocument.getElementById('viatico');
    input_cantidad = iframe.contentDocument.getElementById('cantidad');
    input_fecha = iframe.contentDocument.getElementById('fecha');
    input_imagen = iframe.contentDocument.getElementById('imagen');
    label_costoAsignado = iframe.document.getElementById('costoAsignado');
};

//________________________
// ENLACES A OTRAS PAGINAS
//________________________
let a_Comprobantes = document.getElementById( "link_verComprobados" );


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


function empleadoSeleccionado(){
    //limpiamos el select
    for (let i = document.getElementById("viatico").length; i >= 1; i--) {
        document.getElementById("viatico").remove(i);
    }
    document.getElementById("costoAsignado").value="";
    var x = document.getElementById("empleado").value;
    if(x!=0)    
        //alert(x);
        consultarViaticos();
}

function viaticoSeleccionado(){
    //limpiamos el select
    document.getElementById("costoAsignado").value="";
    var x = document.getElementById("viatico").value;
    if(x!=0){
        consultarCostoAsignado();
    }else{
        document.getElementById("costoAsignado").value="";
    }
}

function set_eventos( )
{
    // BOTON ICONO MENU
    boton_menu.onclick = () => M.Sidenav.getInstance( panel_menu ).open();

    boton_ver.onclick = () =>
    {
        window.location.reload();
        location.reload();
        a_Comprobantes.click();
    }

    // SIMULACION DEL BOTON AGREGAR (ICONO QUE ESTA EN LA HEADER)
    boton_add.onclick = () =>
    {
        if(select_empleado.value == 0 || select_viatico.value == 0 || input_cantidad.value <= 0 || input_fecha.value == "" || input_imagen.value== "")
        {
            return alert("DEBES SELECCIONAR TODOS LOS CAMPOS");
        }
        // alert(input_cantidad.value);
        // alert(input_fecha.value);
        // alert(input_imagen.value);
        // return;
        // PASO 1: OBTENER LOS DATOS INGRESADOS EN EL FORMULARIO
        let empleadoC = select_empleado.value;
        let viaticoC = select_viatico.value;
        let cantidadC = input_cantidad.value;
        let fechaC = input_fecha.value;
        let imagenC = input_imagen.files[0];

        // alert(imagenC);
        // return;
        // PASO 2: PREPARAR EL ENVIO DE LOS DATOS AL SERVIDOR (ARCHIVO PHP)
        let datos = new FormData();
        datos.append( "empleadoC ", empleadoC );
        datos.append( "viaticoC" , viaticoC );
        datos.append( "cantidadC" , cantidadC );
        datos.append( "fechaC" , fechaC );
        datos.append( "imagenC" , imagenC );

        // PASO 3:  INDICAR LA RUTA Y NOMBRE DEL ARCHIVO PHP
        //          QUE GESTIONARA Y RECIBIRA ESTOS DATOS
        let ruta = "agregar-manejo-compviatico.php";

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
            //console.log(data);
            //return;
            // PASO 11: AQUI SE RECIBE LOS DATOS DE RESPUESTA DEL ARCHIVO PHP
            // de preferencia usen una variable de estatus siempre de envio

            // Si regresa por ejemplo <OK> quiere decir que no hubo problemas
            if( data.operacion == "OK" )
            {      
                alert("CORRECTO");
                //CODIGO PARA REFRESCAR PÁGINA 
                //restanteDinero();
                // window.location.reload();
                // location.reload();
                //PASO 12: Si se realizo una consulta 
                //Se evalua cada registro devuelto
                //EJEMPLO:
                let viaticoP = select_viatico.value;
                restanteDinero(viaticoP);
                return;
                // window.location.reload();
                // location.reload();
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
//FUNCION PARA INSERTAR EN REEMBOLSO O REINTEGRO, SEGUN SEA EL CASO
function restanteDinero(viaticoid=0){
        // alert(imagenC);
        // return;
        // PASO 2: PREPARAR EL ENVIO DE LOS DATOS AL SERVIDOR (ARCHIVO PHP)
        let datos = new FormData();
        datos.append( "viaticoid" , viaticoid );

        let ruta = "calculoRestante.php";

        fetch( ruta , { method: "POST" , body: datos } )
        .then( ( response ) => 
        {  
            return response.json(); 
        })
        .then( ( data ) =>
        {
            if( data.operacion == "OK" )
            {      
                //alert("ID VIATICO COMPROBADO: "+data.registros.idcomprobado+" - DIFERENCIA "+data.registros.diferencia);
                if(data.registros[0].diferencia > 0)
                {
                    agregarReembolso(data.registros[0].idcomprobado, data.registros[0].diferencia);
                }else if(data.registros[0].diferencia < 0)
                {
                    agregarReintegro(data.registros[0].idcomprobado, data.registros[0].diferencia);
                }else
                {
                    //CODIGO PARA REFRESCAR PÁGINA 
                    window.location.reload();
                    location.reload();
                }
            }
            else
            {
                alert( data.operacion );
            }
        })
        .catch( ( err ) => { alert(err) }); 
}

function agregarReembolso(idcomprobado=0, diferencia=0)
{
    //alert("AGREGANDO A REEMBOLSO");
    let datos = new FormData();
    datos.append( "idcomprobado", idcomprobado );
    datos.append( "diferencia", diferencia );

        // PASO 3:  INDICAR LA RUTA Y NOMBRE DEL ARCHIVO PHP
        //          QUE GESTIONARA Y RECIBIRA ESTOS DATOS
        let ruta = "agregarReembolso.php";

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
            //console.log(data);
            //return;
            // PASO 11: AQUI SE RECIBE LOS DATOS DE RESPUESTA DEL ARCHIVO PHP
            // de preferencia usen una variable de estatus siempre de envio

            // Si regresa por ejemplo <OK> quiere decir que no hubo problemas
            if( data.operacion == "OK" )
            {      
                //alert("CORRECTO");
                //CODIGO PARA REFRESCAR PÁGINA 
                //restanteDinero();
                // window.location.reload();
                // location.reload();
                //PASO 12: Si se realizo una consulta 
                //Se evalua cada registro devuelto
                //EJEMPLO:
                window.location.reload();
                location.reload();
            }
            else
            {
                alert( data.operacion );
            }
        })
        .catch( ( err ) => { alert(err) });   
}

function agregarReintegro(idcomprobado=0, diferencia=0)
{
    //alert("AGREGANDO A REINTEGROS");
    let cantidad = diferencia*(-1);
    let datos = new FormData();
        datos.append( "cantidad", cantidad );
        datos.append( "idcomprobado" , idcomprobado );

        // PASO 3:  INDICAR LA RUTA Y NOMBRE DEL ARCHIVO PHP
        //          QUE GESTIONARA Y RECIBIRA ESTOS DATOS
        let ruta = "agregarReintegro.php";

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
            //console.log(data);
            //return;
            // PASO 11: AQUI SE RECIBE LOS DATOS DE RESPUESTA DEL ARCHIVO PHP
            // de preferencia usen una variable de estatus siempre de envio

            // Si regresa por ejemplo <OK> quiere decir que no hubo problemas
            if( data.operacion == "OK" )
            {      
                //alert("CORRECTO");
                //CODIGO PARA REFRESCAR PÁGINA 
                //restanteDinero();
                // window.location.reload();
                // location.reload();
                //PASO 12: Si se realizo una consulta 
                //Se evalua cada registro devuelto
                //EJEMPLO:
                window.location.reload();
                location.reload();
            }
            else
            {
                alert( data.operacion );
            }
        })
        .catch( ( err ) => { alert(err) });   
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

function consultarViaticos()
{
    let datos = new FormData();
    datos.append("empleado",document.getElementById("empleado").value);
    let ruta = "consultarViaticos.php";
    fetch( ruta , { method: "POST" , body: datos } )
    .then( ( response ) => 
    {  
        return response.json();  //text
    })
    .then( ( data) =>
    {   
        // alert(data.registros[1].idAsignarViatico);
        // return;
        if( data.operacion == "OK" )
        {       
            for( let i = 0;  i < data.registros.length;  i++ )
            {
                agregarOption
                (  
                    data.registros[i].idAsignarViatico ,
                    data.registros[i].concepto
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

function consultarCostoAsignado()
{
    let datos = new FormData();
    datos.append("viatico",document.getElementById("viatico").value);
    let ruta = "consultarCostoAsignado.php";
    fetch( ruta , { method: "POST" , body: datos } )
    .then( ( response ) => 
    {  
        return response.json();  //text
    })
    .then( ( data) =>
    {   
        // alert(data.registros[1].idAsignarViatico);
        // return;
        if( data.operacion == "OK" )
        {       
            costoViatico =  data.registros[0].cantidad
            agregarCostoAsignado
            (  
                data.registros[0].cantidad
            );
        }
        else
        {
            alert( data.operacion );
        }
    })
    .catch( ( err ) => { alert(err) }); 
}

function agregarCostoAsignado(costo=0)
{
    //document.getElementById("costoAsignado").append(costo);
    document.getElementById("costoAsignado").value = costo;
    costoViatico=costo;
}

function agregarOption(idAsignarViatico = 0 , concepto = "")
{
    // CREACION DEL OPTION PARA VIATICOS select_viatico
    let optionViatico = document.createElement("option");
    optionViatico.value = idAsignarViatico;
    optionViatico.text = concepto;
    document.getElementById("viatico").append(optionViatico);
    //select_viatico.appendChild(optionViatico);
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
    Tooltip.inicializar( boton_add );
    Tooltip.inicializar( boton_ver );

    //=========================== 
    // PERSONALIZAR LOS TOOLTIPS 
    // DEL HEADER ENCABEZADO
    //===========================
    Tooltip.actualizar( boton_regresar , "bottom" , "Regresar" , 
    "Volver a la pnatalla anterior" );

    Tooltip.actualizar( boton_menu , "bottom" , "Menu del Modulo Inventario" , 
    "Ir a otros modulos, secciones o cerrar sesion" );

    Tooltip.actualizar( boton_add , "bottom" , "Registrar comprobante del viático" , 
    "Registro del comprobante del viático en la base de datos" );

    Tooltip.actualizar( boton_ver , "bottom" , "Ver listado de viáticos comprobados" , 
    "Ir al listado de viáticos que ya han sido comprobados" );
    
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




