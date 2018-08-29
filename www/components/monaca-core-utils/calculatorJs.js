var value = "";
var value2 = "";
var operation = "";
var res;
var clear ="";
var total = 0;


$(document).on("click","#btn1",function(){
  value += "1";
  $("#resultado").val(value);
});
$(document).on("click","#btn2",function(){
  value += "2";
  $("#resultado").val(value);
});
$(document).on("click","#btn3",function(){
  value += "3";
  $("#resultado").val(value);
});
$(document).on("click","#btn4",function(){
  value += "4";
  $("#resultado").val(value);
});
$(document).on("click","#btn5",function(){
  value += "5";
  $("#resultado").val(value);
});
$(document).on("click","#btn6",function(){
  value += "6";
  $("#resultado").val(value);
});
$(document).on("click","#btn7",function(){
  value += "7";
  $("#resultado").val(value);
});
$(document).on("click","#btn8",function(){
  value += "8";
  $("#resultado").val(value);
});
$(document).on("click","#btn9",function(){
  value += "9";
  $("#resultado").val(value);
});
$(document).on("click","#btn0",function(){
  value += "0";
  $("#resultado").val(value);
});
$(document).on("click","#btnClear",function(){
   clear = "";
  $("#resultado").val(clear);
});
$(document).on("click","#btnPonto",function(){
   value +=  '.';
  $("#resultado").val(value);
});
$(document).on("click","#btnMais",function(){
  operation = "+";
  res += value;
  value = "";
  //clear = ""; 
  $("#resultado").val(value);
});
$(document).on("click","#btnMenos",function(){
  operation = "-";
  res += value;
  value = "";
  //clear = ""; 
  $("#resultado").val(value);
});
$(document).on("click","#btnMultiplicar",function(){
  operation = "*";
  res += value;
  value = "";
  //clear = ""; 
  $("#resultado").val(value);
});
$(document).on("click","#btnDividir",function(){
  operation = "/";
  res += value;
  value = "";
  //clear = ""; 
  $("#resultado").val(value);
});
$(document).on("click","#btnIgual",function(){
if(operation == "+")
{
  value2 = $("#resultado").val();
  total = parseFloat(value) + parseFloat(value2);
  $("#resultado").val(total);
} 
else if(operation == "-"){
  value2 = $("#resultado").val();
  total = parseFloat(value) - parseFloat(value2);
  $("#resultado").val(total);
}
else if(operation == "*"){
  value2 = $("#resultado").val();
  total = parseFloat(value) * parseFloat(value2);
  $("#resultado").val(total);
}
else if(operation == "/"){
  value2 = $("#resultado").val();
  total = parseFloat(value) / parseFloat(value2);
  $("#resultado").val(total);
}
});