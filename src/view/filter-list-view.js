import { FILTERS } from '../const';
import { createElement } from '../render';

function createFilterTemplate(filter) {
  return(
    `<div class="trip-filters__filter">
    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>
    <label class="trip-filters__filter-label" for="filter-past">${filter}</label>
  </div>`
  );
}

function createFilterListTemplate(filterList) {
  let filterListTemplate = ``;
  filterList.forEach((filterItem) => {
    filterListTemplate = filterItem + createFilterTemplate(filter);
  });
}

function filterTemplate() {
  return(
    `<form class="trip-filters" action="#" method="get">
      ${createFilterListTemplate(FILTERS)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}

export default class FilterView {
  getTemplate() {
    return filterTemplate();
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
