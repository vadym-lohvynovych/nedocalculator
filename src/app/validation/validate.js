import { errors } from "./errors";

export default function validate(value, validation) {
	switch (validation) {
		case "isNumber":
			return !value || value.trim().match(/^\d+(\.|\,)?\d*$/gi) ? null : errors[validation];

		case "isEmpty":
			return !value || value.trim() === "" ? errors[validation] : null;

		default:
			return `${errors.general} - ${validation}`;
	}
}
