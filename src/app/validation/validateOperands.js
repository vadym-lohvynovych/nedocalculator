import validate from ".";
import { showOperandError, hideOperandError } from "../operandErrorHandlers";

const validateOperand = (operand, errorBlock, validations) => {
	let validationResult = null;

	for (let i = 0; i < validations.length; i++) {
		const error = validate(operand.value, validations[i]);

		if (error) {
			showOperandError(operand, errorBlock, error);
			validationResult = error;
			break;
		} else {
			hideOperandError(operand, errorBlock);
		}
	}

	return validationResult;
};

const validateFirstOperand = (elements, ...validations) => validateOperand(elements.firstOperand, elements.firstOperandError, validations);

const validateSecondOperand = (elements, ...validations) => validateOperand(elements.secondOperand, elements.secondOperandError, validations);

export { validateFirstOperand, validateSecondOperand };
