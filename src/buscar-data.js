


function numSortead(vlor){
 const retsort = wspainel.getRange(2, 1, wspainel.getRange('A2').getDataRegion().getLastRow(), 1).getValues()
  const valorminino =  vlor.min
  const valormax = vlor.max
  const sort = Math.floor((Math.random() * valormax )+ valorminino)
   const result = retsort.pSort(sort)
   const Linha = result + 2
     if(result != 1){
       const nomeganhador = wspainel.getRange(Linha, 3).getValue()

      Logger.log( nomeganhador)

      var success = "success"
       return { nomeganhador:nomeganhador, success: success }
     }
  
 }

 