import { CITIES, DESCTIPTIONS, PHOTOS } from '../const';
import { getRandomArrayElement } from '../utils';

export const mockDestination = [
  {
    id: 1,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: {
      src: PHOTOS,
      description: getRandomArrayElement(DESCTIPTIONS)
    }
  },
  {
    id: 2,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: {
      src: PHOTOS,
      description: getRandomArrayElement(DESCTIPTIONS)
    }
  },
  {
    id: 3,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: {
      src: PHOTOS,
      description: getRandomArrayElement(DESCTIPTIONS)
    }
  },
  {
    id: 4,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: {
      src: PHOTOS,
      description: getRandomArrayElement(DESCTIPTIONS)
    }
  },
  {
    id: 5,
    description: getRandomArrayElement(DESCTIPTIONS),
    city: getRandomArrayElement(CITIES),
    images: {
      src: PHOTOS,
      description: getRandomArrayElement(DESCTIPTIONS)
    }
  },
];

export function getRandomDestination() {
  return getRandomArrayElement(mockDestination);
}
