var value = "";
var operation = "";
var result = 0;

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
  value = "";
  $("#resultado").val(value);
});