export const errors = {
	isEmpty: name => {
		return {
			error: `${name} operand is empty`
		};
	},

	noError: {
		error: false
	},

	wrongSymbols: {
		error: "Value must contain only numbers"
	},

	divisionByZero: {
		error: "division by zero"
	}
};
