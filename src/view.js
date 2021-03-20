function doGet(e) {
  return loadmain ()
  }
  

  
  
  
  function loadmain(){
    //pararota 2 teste
    // var temp = HtmlService.createTemplateFromFile("index")
    // return temp.evaluate()
  //   return render('index', {
  // })
  
  var maxmin = {
    vmaximo : wsretorno.getRange(2,4).getValue(),
    // vminimo : wsretorno.getRange(2,3).getValue(),
  };
  var temp = HtmlService.createTemplateFromFile("index")
  temp.totalparticipatnes = "Total de Participantes " + " " + maxmin.vmaximo
  // temp.min = maxmin.vminimo
  // temp.max = maxmin.vmaximo
   temp.datahj = today
  return temp.evaluate()
  }
  