function contvalores()
{
 var shwp = wservicos
//var lr = shwp.getRange("A1").getDataRegion().getLastRow()
var lr = getLastRow(shwp, "A1:A")
Logger.log(lr)

}

function getLastRow(sheet,rangeString)
{
var rng = sheet.getRange(rangeString).getValues()
var lrIndex
for (var i = rng.length-1; i>=0;i--) {
  lrIndex = i
if(!rng[i].every(function(c){return c == ""; })){
 break
}
} 
return lrIndex + 1
//Logger.log(lr)
}
