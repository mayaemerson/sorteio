var ss = SpreadsheetApp.openById (id)
var wsretorno = ss.getSheetByName("retorno_web")
var wspainel = ss.getSheetByName("PAINEL")
 
 var todayT = Utilities.formatDate(new Date(), "GMT-0300", "dd/MM/yyyy' 'HH:mm:ss")
 var today  = Utilities.formatDate(new Date(), "GMT-0300", "dd/MM/yyyy")
 var Ano = Utilities.formatDate(new Date(), "GMT-0300", "yyyy")
 var Mes = Utilities.formatDate(new Date(), "GMT-0300", "MM")
 var Dia = Utilities.formatDate(new Date(), "GMT-0300", "dd")
 var horaminut = Utilities.formatDate(new Date(), "GMT-0300", "HH:mm:ss")

 function include(calsorteio){
  return HtmlService.createHtmlOutputFromFile(calsorteio).getContent()
    }



function render(file, argoObject) {
      var template = HtmlService.createTemplateFromFile(file) //chama o html para o doGet
      if (argoObject) {
        var keys = Object.keys(argoObject)
    
        keys.forEach(function (key) {
          template[key] = argoObject[key]
        })
      } //end if
      return template.evaluate() // retorna os valores para o html
    }
