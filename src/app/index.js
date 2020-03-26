import "bootstrap/scss/bootstrap.scss";
import "./styles/style.scss";

import initElements from "./initElements";
import initEvents from "./initEvents";
import handleCalculation from "./handleCalculation";
import cleanResult from "./cleanResult";
import divisionByZero from './validation/divisionByZero';
import { validateFirstOperand, validateSecondOperand } from "./validation/validateOperands";

const elements = initElements({
	firstOperand: "first-operand",
	secondOperand: "second-operand",
	calculate: "calculate",
	operation: "operation",
	result: "result",
	firstOperandError: "error-text-first",
	secondOperandError: "error-text-second"
});

initEvents([
	{
		element: elements.firstOperand,
		event: "keyup",
		handler: () => validateFirstOperand(elements, "isNumber")
	},
	{
		element: elements.firstOperand,
		event: "focus",
		handler: () => cleanResult(elements)
	},
	{
		element: elements.secondOperand,
		event: "keyup",
		handler: () => validateSecondOperand(elements, "isNumber")
	},
	{
		element: elements.secondOperand,
		event: "focus",
		handler: () => cleanResult(elements)
	},
	{
		element: elements.operation,
		event: "change",
		handler: () => cleanResult(elements)
	},
	{
		element: elements.calculate,
		event: "click",
		handler: () => {
			const error = validateFirstOperand(elements, "isEmpty", "isNumber") || validateSecondOperand(elements, "isEmpty", "isNumber");
			const divisionError = divisionByZero(elements)

			if(error) {
				return false;
			} else if (divisionError) {
				return alert(divisionError);
			} else {
				handleCalculation(elements);
			}
		}
	}
]);
