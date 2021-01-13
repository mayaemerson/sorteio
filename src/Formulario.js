function Formulário(){

  var form = FormApp.openById('15gUswHIRwI0EYCWQq2Bm_WBX9g9hgpGKkg2wyhvOtMM');
  var formUrl = form.getPublishedUrl();
  var htmlApp = HtmlService
      .createHtmlOutput('<h1></h1>')
      .append('<iframe src ="' + formUrl + '?embedded=true" width="450" height="720" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>')
      
      .setWidth(500)
      .setHeight(900);

  SpreadsheetApp.getActiveSpreadsheet().show(htmlApp);
}