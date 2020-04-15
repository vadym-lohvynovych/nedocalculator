export default function calculate(firstValue, operation, secondValue) {
  let result;

  switch (operation) {
    case '+':
      result = +firstValue + +secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    case '/':
      result = firstValue / secondValue;
      break;
  }

  return result;
}
