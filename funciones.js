const HOJA = SpreadsheetApp.openById('1jjlsFJfwn3hxqad0XYbQ1B_vUIuYJldHyeRxUUhUJAk').getActiveSheet();

function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');
}
function doPost(datos)
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');
}

function obtenerDatosHtml(nombre)
{
     return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre,apellidos,correo,telefono)
{
    HOJA.appendRow([nombre,apellidos,correo,telefono]);
}

function borracContacto(numFila)
{
    HOJA.deleteRow(numFila);
}
function modificarContacto(numFila,datos)
{
    let celdas = HOJA.getRange('A'+numFila+':D'+numFila);
    celdas.setValues([[datos.nombre,datos.apellidos,datos.correo,datos.telefono]]);
}