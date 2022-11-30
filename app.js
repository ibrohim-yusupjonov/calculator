var op;
function func() {
  var result;
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2) {
        result = num1 / num2;
      } else {
        result = 'cheksizlik';
      }
      break;
    default:
      result = 'Amalni tanlang';
  }
  
  document.getElementById("result").innerHTML = result;
}