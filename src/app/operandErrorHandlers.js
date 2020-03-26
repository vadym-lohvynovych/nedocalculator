function handleOperandError(operand, errorBlock, error) {
	if (error) {
		errorBlock.textContent = error;
		operand.classList.add("is-invalid");
	} else {
		errorBlock.textContent = "";
		operand.classList.remove("is-invalid");
	}
}

export const showOperandError = (operand, errorBlock, error) => handleOperandError(operand, errorBlock, error);
export const hideOperandError = (operand, errorBlock) => handleOperandError(operand, errorBlock);
