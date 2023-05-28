import { getRandomNumber } from './utils';

export const EVENTS_TYPE = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

export const EVENTS_COUNT = 5;

export const SORT_LIST = ['Day', 'Price', 'Offers', 'Event', 'Price'];

export const FILTERS = ['Everything', 'Future', 'Present', 'Past', 'Accept filter'];

export const DESCTIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];

export const TITLES = ['Add luggage','Switch to comfort','Lunch in city','Book tickets','Add breakfast', 'Add meal', 'Order Uber', 'Choose seats'];

export const CITIES = ['Geneva', 'Chamonix', 'Paris', 'Brussels', 'Prague', 'Ufa', 'Los-Santos', 'San-Fierro', 'Vice-city', 'Las-Venturas', 'London'];

export const PHOTOS = `https://loremflickr.com/248/152?random=${getRandomNumber(1,99)}`;

export const PRICES = getRandomNumber(10,50);

export const DATE_FORMAT = 'MMM D';

export const TIME_FORMAT = 'HH:mm';

export const FULL_DATE_FORMAT = 'YY/MM/DD HH:mm';

export const TIME_DIFFERENCE_MIN = 'mm[m]';

export const TIME_DIFFERENCE_HOUR_MIN = 'HH[h] mm[m]';

export const TIME_DIFFERENCE_DAY_HOUR_MIN = 'DD[d] HH[h] mm[m]';

export const MS_IN_HOUR = 3600000;

export const MS_IN_DAY = 86400000;
