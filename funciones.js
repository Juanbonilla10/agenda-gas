function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');
}

function obtenerDatosHtml(nombre)
{
     return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}