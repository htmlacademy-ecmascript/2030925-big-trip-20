import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { MS_IN_DAY, MS_IN_HOUR, TIME_DIFFERENCE_DAY_HOUR_MIN, TIME_DIFFERENCE_HOUR_MIN, TIME_DIFFERENCE_MIN } from './const';
dayjs.extend(utc);
dayjs.extend(duration);


export function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function humanizeEventDate(date,format) {
  return date ? dayjs(date).utc().format(format) : '';
}

export function getPointDuration(dateFrom,dateTo) {
  const dateDiff = dayjs(dateFrom).diff(dateTo);
  const timeDiff = dayjs(dateDiff).$ms;

  let pointDuration = 0;

  switch(true) {
    case timeDiff >= MS_IN_DAY:
      pointDuration = dayjs.duration(dateDiff).format(TIME_DIFFERENCE_DAY_HOUR_MIN);
      break;
    case timeDiff >= MS_IN_HOUR:
      pointDuration = dayjs.duration(dateDiff).format(TIME_DIFFERENCE_HOUR_MIN);
      break;
    case timeDiff < MS_IN_HOUR:
      pointDuration = dayjs.duration(dateDiff).format(TIME_DIFFERENCE_MIN);
      break;
  }
  return pointDuration;
}
/*
export function humanizeEventTime(time) {
  return time ? dayjs(time).format(TIME_FORMAT) : '';
}
*/
