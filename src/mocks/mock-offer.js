import { EVENTS_TYPE, PRICES, TITLES } from '../const';
import { getRandomArrayElement } from '../utils';

export const mockOffer = [
  {
    offerType: getRandomArrayElement(EVENTS_TYPE),
    offerTitle: getRandomArrayElement(TITLES),
    offerPrice: PRICES
  }
];
