import flatpickr from 'flatpickr';
import { EVENTS_TYPE, PRICES } from '../const';
import { getRandomArrayElement } from '../utils';
import { getRandomDestination } from './mock-destination';
import { getRandomMockOffer } from './mock-offer';

const mockEvents = [
  {
    id: 1,
    eventType: getRandomArrayElement(EVENTS_TYPE),
    eventDestination: getRandomDestination(),
    dateFrom: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/06/26')
    }),
    dateTo: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/06/26')
    }),
    price: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: true
  },
  {
    id: 2,
    eventType: getRandomArrayElement(EVENTS_TYPE),
    eventDestination: getRandomDestination(),
    dateFrom: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/09/30')
    }),
    dateTo: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/09/30')
    }),
    price: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: false
  },
  {
    id: 3,
    eventType: getRandomArrayElement(EVENTS_TYPE),
    eventDestination: getRandomDestination(),
    dateFrom: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/05/11')
    }),
    dateTo: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/05/11')
    }),
    price: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: true
  },
  {
    id: 4,
    eventType: getRandomArrayElement(EVENTS_TYPE),
    eventDestination: getRandomDestination(),
    dateFrom: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/02/28')
    }),
    dateTo: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/02/28')
    }),
    price: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: false
  },
  {
    id: 5,
    eventType: getRandomArrayElement(EVENTS_TYPE),
    eventDestination: getRandomDestination(),
    dateFrom: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/10/10')
    }),
    dateTo: flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      maxDate: new Date('2023/10/10')
    }),
    price: PRICES,
    offers: getRandomMockOffer(),
    isFavorite: true
  },
];

export function getRandomEvents() {
  return getRandomArrayElement(mockEvents);
}
