import { EVENTS_TYPE, PRICES } from '../const';
import { getRandomArrayElement } from '../utils';
import { getRandomDestination } from './mock-destination';
import { getRandomMockOffer } from './mock-offer';

const mockEvents = [
  {
    id: 1,
    type: getRandomArrayElement(EVENTS_TYPE),
    destination: getRandomDestination(),
    dateFrom: new Date('2023/08/02 23:33'),
    dateTo: new Date('2023/08/04 00:00'),
    basePrice: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: true
  },
  {
    id: 2,
    type: getRandomArrayElement(EVENTS_TYPE),
    destination: getRandomDestination(),
    dateFrom: new Date('2023/05/04 15:30'),
    dateTo: new Date('2023/05/11 17:00'),
    basePrice: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: false
  },
  {
    id: 3,
    type: getRandomArrayElement(EVENTS_TYPE),
    destination: getRandomDestination(),
    dateFrom: new Date('2023/11/09 19:50'),
    dateTo: new Date('2023/11/09 11:13'),
    basePrice: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: true
  },
  {
    id: 4,
    type: getRandomArrayElement(EVENTS_TYPE),
    destination: getRandomDestination(),
    dateFrom: new Date('2023/07/31 14:28'),
    dateTo: new Date('2023/08/10 06:00'),
    basePrice: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: false
  },
  {
    id: 5,
    type: getRandomArrayElement(EVENTS_TYPE),
    destination: getRandomDestination(),
    dateFrom: new Date('2023/02/28 03:55'),
    dateTo: new Date('2023/03/17 22:28'),
    basePrice: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: true
  },
];

export function getRandomEvents() {
  return getRandomArrayElement(mockEvents);
}
