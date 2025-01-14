function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');
}

function obtenerDatosHtml(nombre)
{
     return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){

    let hoja = SpreadsheetApp.openById('1jjlsFJfwn3hxqad0XYbQ1B_vUIuYJldHyeRxUUhUJAk').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;

}