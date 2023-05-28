import { EVENTS_COUNT } from '../const';
import { mockDestination } from '../mocks/mock-destination';
import { getRandomEvents } from '../mocks/mock-events';
import { mockOffer } from '../mocks/mock-offer';

export default class EventsModel {
  events = Array.from({length: EVENTS_COUNT}, getRandomEvents);
  destinations = mockDestination;
  offers = mockOffer;

  getEvents() {
    return this.events;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
