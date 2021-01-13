

function pesquisaretorno(select){
  wsretorno.getRange('A1').setValue(select)
  var nomeganhador = wsretorno.getRange("B1").getValue()
  return { ganhadordopredmio: nomeganhador }

 }
//  function MATCH() {
//   var spreadsheet = SpreadsheetApp.getActive();
//   spreadsheet.getRange('E1').activate();
//   spreadsheet.getCurrentCell().setFormula('=IFERROR(IF(retorno_web!A1="";"";index(PAINEL!C2:C;MATCH(A1;PAINEL!A1:A;0))))');
// };
