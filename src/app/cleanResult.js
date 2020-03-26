export default function cleanResult(elements) {
	if (elements.result.textContent) {
		elements.result.textContent = "";
	}
}
