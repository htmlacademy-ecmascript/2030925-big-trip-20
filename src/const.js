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

export const DATE_FORMAT = 'D MMM';

export const TIME_FORMAT = 'HH:mm';

export const EVENT_DATE_FORMAT = 'DD/MM/YY mm:ss';
