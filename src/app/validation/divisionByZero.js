import { errors } from './errors';

export default function divisionByZero(operation, secondOperand) {
  if (operation === '/' && Number(secondOperand) === 0) {
    return errors.divisionByZero;
  } else {
    return null;
  }
}
