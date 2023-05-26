import { CITIES, DESCTIPTIONS, PHOTOS } from '../const';
import { getRandomArrayElement } from '../utils';

export const mockDestination = [
  {
    id: 1,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: PHOTOS
  },
  {
    id: 2,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: PHOTOS
  },
  {
    id: 3,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: PHOTOS
  },
  {
    id: 4,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: PHOTOS
  },
  {
    id: 5,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: PHOTOS
  },
];

export function getRandomDestination() {
  return getRandomArrayElement(mockDestination);
}
