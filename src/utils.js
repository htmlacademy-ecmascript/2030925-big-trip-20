import dayjs from 'dayjs';
import { DATE_FORMAT, TIME_FORMAT } from './const';

export function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function humanizeEventDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

export function humanizeEventTime(time) {
  return time ? dayjs(time).format(TIME_FORMAT) : '';
}
