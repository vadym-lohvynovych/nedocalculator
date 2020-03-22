import "bootstrap/scss/bootstrap.scss";
import "./styles/style.scss";

import { validation } from "./validation";
import { selectors } from "./selectors";

const errors = {
	first: false,
	second: false
};

const validateFirstOperand = () => validateInput(selectors.firstOperand, validation.getFirstOperandValidation(), "first");
const validateSecondOperand = () => validateInput(selectors.secondOperand, validation.getSecondOperandValidation(), "second");

selectors.calculate.addEventListener("click", calculate);

selectors.firstOperand.addEventListener("keyup", validateFirstOperand);

selectors.secondOperand.addEventListener("keyup", validateSecondOperand);

selectors.select.addEventListener("change", () => {
    if(selectors.secondOperand.value) validateSecondOperand()()
});


function validateInput(operand, validation, errorName) {
	if (selectors.result.textContent) selectors.result.textContent = "";

	if (validation.error) {
		selectors.errorBlocks[errorName].textContent = validation.error;

		if (!errors[errorName]) {
			selectors.calculate.classList.add("disabled");
			operand.classList.add("is-invalid");
			errors[errorName] = true;
		}
	} else if (errors[errorName]) {
        operand.classList.remove("is-invalid");
        selectors.errorBlocks[errorName].textContent = "";
        errors[errorName] = false;
	}

	setCalculateButtonDisabledClass();
}

function calculate(e) {
	if (e.target.classList.contains("disabled")) return;
	let result = eval(selectors.firstOperand.value.replace(",", ".") + selectors.select.value + selectors.secondOperand.value.replace(",", "."));

	if (result % 1) {
		result = result.toFixed(5);
	}

	if (!isFinite(result) || Number.isNaN(result)) {
		alert("wrong result");
	} else {
		selectors.result.textContent = result;
	}
}

function setCalculateButtonDisabledClass() {
	if (isValidationError() && !selectors.calculate.classList.contains("disabled")) {
		selectors.calculate.classList.add("disabled");
	} else if (!isValidationError() && selectors.calculate.classList.contains("disabled")) {
		selectors.calculate.classList.remove("disabled");
	}
}

function isValidationError() {
	return validation.getFirstOperandValidation().error || validation.getSecondOperandValidation().error;
}
