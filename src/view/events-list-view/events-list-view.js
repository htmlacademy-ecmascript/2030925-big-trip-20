import { createElement } from '../../render';

function eventsListTemplate() {
  return(
    '<section class="trip-events"> </section>'
  );
}

export default class EventsListView {
  getTemplate() {
    return eventsListTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate);
    }
  }

  removeElement() {
    this.element = null;
  }
}
