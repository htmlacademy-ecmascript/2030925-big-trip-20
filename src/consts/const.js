import { getRandomNumber } from "./utils.js/utils";

export const EVENTS_TYPE = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

export const EVENTS_COUNT = 5

export const DESCTIPTIONS = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];

export const CITIES = ['Geneva', 'Chamonix', 'Paris', 'Brussels', 'Prague'];

export const PHOTOS = `https://loremflickr.com/248/152?random=${getRandomNumber(1,99)}`

export const PRICES = getRandomNumber(10,50);

