import { errors } from "./errors";

export default function divisionByZero(elements) {
    if(elements.operation.value === "/" && elements.secondOperand.value === "0") {
        return errors.divisionByZero
    } else {
        return null
    }
}
