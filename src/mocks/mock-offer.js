import { EVENTS_TYPE, PRICES, TITLES } from '../const';
import { getRandomArrayElement } from '../utils';

export const mockOffer = [
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offers: {
      id: 1,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
  }
  },
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offers: {
      id: 1,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
  }
  },
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offers: {
      id: 1,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
  }
  },
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offers: {
      id: 1,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
  }
  },
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offers: {
      id: 1,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
  }
  },
];

export function getRandomMockOffer() {
  getRandomArrayElement(mockOffer);
}
