import { EVENTS_TYPE, PRICES, TITLES } from '../const';
import { getRandomArrayElement } from '../utils';

export const mockOffer = [
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offer: {
      id: 1,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
    }
  },
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offer: {
      id: 2,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
    }
  },
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offer: {
      id: 3,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
    }
  },
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offer: {
      id: 4,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
    }
  },
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offer: {
      id: 5,
      offerTitle: getRandomArrayElement(TITLES),
      offerPrice: PRICES
    }
  },
];

export function getRandomMockOffer() {
  return getRandomArrayElement(mockOffer);
}
