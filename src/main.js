import CreateNewPointView from './view/add-new-point-view';
import FilterView from './view/filter-list-view';
import EventsPresenter from './presenter/events-presenter';
import { render } from './render';
import EventsModel from './model/events-model';

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = siteMainElement.querySelector('.page-header');
const filterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const pointsModel = new EventsModel();
const eventsPresenter = new EventsPresenter({
  eventContainer: siteMainElement,
  pointsModel,
});

render(new CreateNewPointView(), siteHeaderElement);
render(new FilterView(), filterElement);

eventsPresenter.init();
