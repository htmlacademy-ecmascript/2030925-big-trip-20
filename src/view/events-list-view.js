import { createElement } from '../render';

function eventsListTemplate() {
  return(
    '<ul class="trip-events__list"></ul>'
  );
}

export default class EventsListView {
  getTemplate() {
    return eventsListTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
  }

  removeElement() {
    this.element = null;
  }
}
