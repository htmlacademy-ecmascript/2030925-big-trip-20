import { CITIES, DESCTIPTIONS, PHOTOS } from '../const';
import { getRandomArrayElement } from '../utils';

export const mockDestination = [
  {
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: PHOTOS
  }
];

export const getRandomDestination = () => getRandomArrayElement(mockDestination);
