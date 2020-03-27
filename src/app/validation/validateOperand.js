import validate from "./validate";

export default function validateOperand(operand, ...validations) {
	let validationResult = null;

	for (let i = 0; i < validations.length; i++) {
		const error = validate(operand.value, validations[i]);

		if (error) {
			validationResult = error;
			break;
		}
	}

	return validationResult;
}