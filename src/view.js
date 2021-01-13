function doGet(e) {
return loadmain ()
}

//  var Route = {}
//  Route.path = function (route, callback) {
//    Route[route] = callback
//  }

//  function doGet(e) {
  
//    Route.path('form', loadmain)

//    if (Route[e.parameters.v]) {
//     return Route[e.parameters.v]();
//    } else {
//      return HtmlService.createTemplateFromFile('index').evaluate()
//    }

//  }



function loadmain(){
  //pararota 2 teste
  // var temp = HtmlService.createTemplateFromFile("index")
  // return temp.evaluate()
//   return render('index', {
// })

var maxmin = {
  vmaximo : wsretorno.getRange(1,4).getValue(),
  vminimo : wsretorno.getRange(1,3).getValue(),
};
var temp = HtmlService.createTemplateFromFile("index")
temp.totalparticipatnes = "Total de Participantes " + " " + maxmin.vmaximo
temp.min = maxmin.vminimo
temp.max = maxmin.vmaximo
temp.datahj = todayT
return temp.evaluate()
}
