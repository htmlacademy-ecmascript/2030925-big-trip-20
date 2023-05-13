import { createElement } from '../../render';

function createNewEventButtonTemplate() {
  return(
    '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>'
  );
}

export default class CreateNewEventButtonView {
  getTemplate() {
    return createNewEventButtonTemplate();
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
