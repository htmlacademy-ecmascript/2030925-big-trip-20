import { EVENTS_COUNT } from '../const';
import { mockDestination } from '../mocks/mock-destination';
import { getRandomEvents } from '../mocks/mock-events';
import { mockOffer } from '../mocks/mock-offer';

export default class EventsModel {
  points = Array.from({length: EVENTS_COUNT}, getRandomEvents);
  offers = mockOffer;
  destinations = mockDestination;

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }
}
