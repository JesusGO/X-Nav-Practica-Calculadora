function deleteLastNumber(){
  var borrado= $("#screen span").text().slice(0,-1);
  $("#screen span").text(borrado);
}
function sumar(a,b){
  return parseInt(a)+parseInt(b);
}
function restar(a,b){
  return parseInt(a)-parseInt(b);
}
function dividir(a,b){
  return parseInt(a)/parseInt(b);
}
function multiplicar(a,b){
  return parseInt(a)*parseInt(b);
}
function calculate(){
  var result =$("#screen span").text();
  var operar = result.split(" ");
  var res;
  //for (var i = 0; i < operar.length; i++) {
  //  console.log(operar[i]);
  //}
  if (operar[1]=="+") {
    res=sumar(operar[0],operar[2]);
  }else if (operar[1]=="-") {
    res=restar(operar[0],operar[2]);
  }else if (operar[1]=="x") {
    res=multiplicar(operar[0],operar[2]);
  }else if (operar[1]=="/") {
    res=dividir(operar[0],operar[2]);
  }

  $("#resultado p").text(res);
  $("#screen span").text("");
}

function writeNumber(number){
  $("#screen span").append(number);
}
function writeOperation(ope){
  $("#screen span").append(" "+ope+" ");
}
function chooseOperations(ope){
  switch (ope) {
    case 43:
      writeOperation("+");
      break;
    case 42:
      writeOperation("x");
      break;
    case 45:
      writeOperation("-");
      break;
    case 47:
      writeOperation("/");
      break;
    default:

  }
}
$(document).ready(function(){

  $("#delete").click(function() {
    deleteLastNumber();
  });
  $("#enter").click(function() {
    calculate();
  });

  $(".num").click(function() {
    var number=$(this).children('p').text();
    writeNumber(number);
  });
  $(".ope").click(function() {
    var ope=$(this).children('p').text();
    writeOperation(ope);
  });
});


$(document).keypress(function(e){
    var number=e.which;

    if(number<=57 && number>=48){
      var number= number-48;
      writeNumber(number);
    }else if (number==8){
      deleteLastNumber();
    }else{
      chooseOperations(number);
    }

});
