export default function(initObject) {
	let elements = {};

	Object.keys(initObject).forEach(key => {
		elements[key] = document.getElementById(initObject[key]);
	});

	return elements;
}
