/*
 * Implement all your JavaScript in this file!
 */

var val1 = ''; // this is the one on display
var val0 = '';
var func = '';

function keyPress(e){
    if (e == 13){
      results();
    }
}

$('button').click(function() {
  val1 += String(this.value);
  $("#display").val(val1);
}
);

$("#addButton").click(function(){
  val0 = val1;
  func = "add";
  val1 = '';
});

$("#subtractButton").click(function(){
  val0 = val1;
  func = "subtract";
  val1 = '';
});

$("#multiplyButton").click(function(){
  val0 = val1;
  func = "multiply";
  val1 = '';
});

$("#divideButton").click(function(){
  val0 = val1;
  func = "divide";
  val1 = '';
});

$("#divideButton").click(function(){
  val0 = val1;
  func = "divide";
  val1 = '';
});

$("#clearButton").click(function(){
  val0 = val1 = '';
  $('#display').val('');
});
// divide by 0 get infinity

function results(){
  switch(func) {
    case 'add':
      val1 = String(parseInt(val0) + parseInt(val1));
      val0 = '';
      $("#display").val(parseInt(val1));
      break;

    case 'subtract':
      val1 = String(parseInt(val0) - parseInt(val1));
      val0 = '';
      $("#display").val(parseInt(val1));      break;

    case 'divide':
      val1 = String(parseFloat(val0) / parseInt(val1));
      val0 = '';
      $("#display").val(parseFloat(val1));
      break;

    case 'multiply':
      val1 = String(parseInt(val0) * parseInt(val1));
      val0 = '';
      $("#display").val(parseInt(val1));
      break;
    }
}

$("#equalsButton").click(results);
