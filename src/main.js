import CreateNewPointView from './view/add-new-point-view';
import FilterView from './view/filter-list-view';
import PagePresenter from './presenter/page-presenter';
import { render } from './render';
import EventsModel from './model/events-model';

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = siteMainElement.querySelector('.page-header');
const filterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const eventsModel = new EventsModel();
const pagePresenter = new PagePresenter({
  pageContainer: siteMainElement,
  eventsModel
});

render(new CreateNewPointView(), siteHeaderElement);
render(new FilterView(), filterElement);

pagePresenter.init();
