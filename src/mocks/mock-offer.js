import { EVENTS_TYPE, PRICES, TITLES } from '../const';
import { getRandomArrayElement } from '../utils';

export const mockOffer = [
  {
    id: 1,
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offerTitle: getRandomArrayElement(TITLES),
    offerPrice: PRICES
  },
  {
    id: 2,
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offerTitle: getRandomArrayElement(TITLES),
    offerPrice: PRICES
  },
  {
    id: 3,
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offerTitle: getRandomArrayElement(TITLES),
    offerPrice: PRICES
  },
  {
    id: 4,
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offerTitle: getRandomArrayElement(TITLES),
    offerPrice: PRICES
  },
  {
    id: 5,
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offerTitle: getRandomArrayElement(TITLES),
    offerPrice: PRICES
  },
];

export function getRandomMockOffer() {
  getRandomArrayElement(mockOffer);
}
