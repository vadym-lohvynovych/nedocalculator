import "bootstrap/scss/bootstrap.scss";
import "./styles/style.scss";

import initElements from "./initElements";
import initEvents from "./initEvents";
import calculate from "./calculate";
import divisionByZero from "./validation/divisionByZero";
import validateOperand from "./validation/validateOperand";
import handleErrorsView from "./handleErrorsView";

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
		handler: () => {
			const validation = validateOperand(elements.firstOperand, "isNumber");
			handleErrorsView(elements, { firstOperandError: validation });
		}
	},
	{
		element: elements.firstOperand,
		event: "focus",
		handler: () => {
			elements.result.textContent = "";
		}
	},
	{
		element: elements.secondOperand,
		event: "keyup",
		handler: () => {
			const validation = validateOperand(elements.secondOperand, "isNumber");
			handleErrorsView(elements, { secondOperandError: validation });
		}
	},
	{
		element: elements.secondOperand,
		event: "focus",
		handler: () => {
			elements.result.textContent = "";
		}
	},
	{
		element: elements.operation,
		event: "change",
		handler: () => {
			elements.result.textContent = "";
		}
	},
	{
		element: elements.calculate,
		event: "click",
		handler: () => {
			const firstOperandError = validateOperand(elements.firstOperand, "isEmpty", "isNumber");
			const secondOperandError = validateOperand(elements.secondOperand, "isEmpty", "isNumber");
			const divisionError = divisionByZero(elements.operation.value, elements.secondOperand.value);

			if (firstOperandError || secondOperandError || divisionError) {
				handleErrorsView(elements, {
					firstOperandError,
					secondOperandError,
					divisionError
				});
			} 
			else {
				let result = calculate(elements.firstOperand.value, elements.operation.value, elements.secondOperand.value);

				if (result % 1) {
					result = result.toFixed(5);
				}

				elements.result.textContent = result;
			}
		}
	}
]);
