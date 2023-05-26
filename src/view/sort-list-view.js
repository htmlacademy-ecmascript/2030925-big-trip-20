import { SORT_LIST } from '../const';
import { createElement } from '../render';

function createSortItemTemplate(sortItem) {
  return(
    `<div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
    <label class="trip-sort__btn" for="sort-offer">${sortItem}</label>
  </div>`
  );
}

function createSortListTemplate(sortList) {
  let sortItemsTemplate = ``
  sortList.forEach((sortItem) => {
    sortItemsTemplate = sortItemsTemplate + createSortItemTemplate(sortItem);
  });
  return sortItemsTemplate;
}

function sortListTemplate() {
  return(
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${createSortListTemplate(SORT_LIST)}
    </form>`
  );
}

export default class SortListView {
  getTemplate() {
    return sortListTemplate();
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
