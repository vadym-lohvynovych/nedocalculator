export default function handleCalculation(elements) {
	let result;

	switch (elements.operation.value) {
		case "+":
			result = +elements.firstOperand.value + +elements.secondOperand.value;
			break;
		case "-":
			result = elements.firstOperand.value - elements.secondOperand.value;
			break;
		case "*":
			result = elements.firstOperand.value * elements.secondOperand.value;
			break;
		case "/":
			result = elements.firstOperand.value / elements.secondOperand.value;
			break;
	}

	if (result % 1) {
		result = result.toFixed(5);
	}

	elements.result.textContent = result;
}
