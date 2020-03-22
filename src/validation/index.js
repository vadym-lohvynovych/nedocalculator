import { errors } from "./errors";
import { selectors } from "../selectors";

const values = {
	getFirst: () => selectors.firstOperand.value,
	getSecond: () => selectors.secondOperand.value
};

export const validation = {
	getFirstOperandValidation: () => getValidation(values.getFirst(), "First"),

	getSecondOperandValidation: () => getValidation(values.getSecond(), "Second")
};

function getValidation(value, name) {
	if (!value || (value && value.trim() === "")) {
		return errors.isEmpty(name);
	} 
	else if (value.trim().match(/[,.].*[,.]/gi)) {
		return errors.wrongSymbols;
	} 
	else if (value.trim().match(/[a-zA-Zа-яА-я!@#$%^&*()_+}{":;~`'/\\\[\]}]/gi)) {
		return errors.wrongSymbols;
	} 
	else if (value == 0 && name === "Second" && selectors.select.value === "/") {
		return errors.divisionByZero;
	} 
	else {
		return { error: false };
	}
}