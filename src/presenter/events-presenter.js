import EditPointView from '../view/edit-point-view';
import EventsItemView from '../view/events-item-view';
import EventsListView from '../view/events-list-view';
import SortListView from '../view/sort-list-view';
import { render } from '../render';

export default class EventsPresenter {
  eventsListComponent = new EventsListView();

  constructor({eventContainer,eventsModel}) {
    this.eventContainer = eventContainer;
    this.eventsModel = eventsModel;
  }

  init () {
    this.eventPoints = [...this.eventsModel.getEvents()];
    this.eventOffers = [...this.eventsModel.getOffers()];
    this.eventDestinations = [...this.eventsModel.getDestinations()];

    render(new SortListView(), this.eventContainer);
    render(this.eventsListComponent, this.eventContainer);
    render(new EditPointView({event: this.eventPoints[0], offers: this.eventOffers, destinations: this.eventDestinations}), this.eventsListComponent.getElement());

    for(let i = 1; i < this.eventPoints.length ; i++) {
      render(new EventsItemView({event: this.eventPoints[i], offers: this.eventOffers, destinations: this.eventDestinations}), this.eventsListComponent.getElement());
    }
  }
}
/*
export default class PagePresenter {
  pageComponent = new EventsListView();
  eventListComponent = new EventsListView();

  constructor({pageContainer,eventsModel}) {
    this.pageContainer = pageContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.pageEvents = [...this.eventsModel.getEvents()];

    render(this.pageComponent, this.pageContainer);
    render(new SortListView(), this.pageComponent.getElement());
    render(this.eventListComponent, this.pageComponent.getElement());
    render(new EditPointView(), this.pageComponent.getElement());

    for(let i = 0; i < this.pageEvents.length; i++) {
      render(new EventsItemView({event: this.pageEvents[i]}), this.eventListComponent.getElement());
    }

    render(new CreateNewPointView, this.pageComponent.getElement());
  }
}
*/
