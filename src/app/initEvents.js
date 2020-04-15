export default function initEvents(eventObjects) {
  eventObjects.forEach((obj) => {
    obj.element.addEventListener(obj.event, obj.handler);
  });
}
