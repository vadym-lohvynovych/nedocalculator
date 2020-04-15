import { showOperandError, hideOperandError } from './operandErrorHandlers';

export default function handleErrorsView(elements, { firstOperandError, secondOperandError, divisionError }) {
  if (firstOperandError) {
    hideOperandError(elements.secondOperand, elements.secondOperandError);
    showOperandError(elements.firstOperand, elements.firstOperandError, firstOperandError);
  } else if (secondOperandError) {
    hideOperandError(elements.firstOperand, elements.firstOperandError);
    showOperandError(elements.secondOperand, elements.secondOperandError, secondOperandError);
  } else if (divisionError) {
    hideOperandError(elements.firstOperand, elements.firstOperandError);
    showOperandError(elements.secondOperand, elements.secondOperandError, divisionError);
  } else {
    hideOperandError(elements.firstOperand, elements.firstOperandError);
    hideOperandError(elements.secondOperand, elements.secondOperandError);
  }
}
