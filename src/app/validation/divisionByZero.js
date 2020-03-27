import { errors } from "./errors";

export default function divisionByZero(operation, secondOperand) {
	if (operation === "/" && secondOperand === "0") {
		return errors.divisionByZero;
	} else {
		return null;
	}
}
