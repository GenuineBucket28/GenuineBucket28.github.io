function testFunction(num1, num2) {
  return num1 + num2;
}
var num = 0;
function counterUp() {
  return num += 1;
}
function counterDown() {
  return num -= 1;
}
var text = ''
var i
function loopTest() {
  for (i = 0; i < 10; i++) {
    text += "This loop has ran" + i + "time(s)<br>"
  }
  return text
}
