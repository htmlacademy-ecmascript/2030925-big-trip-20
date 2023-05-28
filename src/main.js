import CreateNewPointView from './view/add-new-point-view';
import FilterView from './view/filter-list-view';
import EventsPresenter from './presenter/events-presenter';
import { render } from './render';
import EventsModel from './model/events-model';

const tripMainElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');
const filterMainElement = document.querySelector('.trip-controls__filters');
const eventsModel = new EventsModel();
const eventsPresenter = new EventsPresenter({
  eventContainer: tripEventsElement,
  eventsModel,
});

render(new CreateNewPointView(), tripMainElement);
render(new FilterView(), filterMainElement);

eventsPresenter.init();
