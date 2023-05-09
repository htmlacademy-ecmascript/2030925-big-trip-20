import CreateNewEventButtonView from "./view/create-event-button-view/create-event-button-view";
import FilterView from "./view/filter-list-view/filter-list-view";

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');
const pagePresenter = new PagePresenter({pageContainer: siteMainElement});

render(new CreateNewEventButtonView(), siteHeaderElement);
render(new FilterView(), siteMainElement);

pagePresenter.init();
