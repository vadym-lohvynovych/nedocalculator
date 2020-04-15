export default function (initObject) {
  let elements = {};

  Object.keys(initObject).forEach((key) => {
    elements[key] = document.querySelector(initObject[key]);
  });

  return elements;
}
