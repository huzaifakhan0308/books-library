import { DateTime } from './luxon.js';

const now = DateTime.now();

const dateTime = setInterval(() => {
  document.querySelector('.day').innerText = now.day;
  document.querySelector('.month').innerText = now.monthLong;
  document.querySelector('.year').innerText = now.year;
  const timeNow = DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS);
  document.querySelector('.time').innerText = `${timeNow}`;
}, 1000);

export default dateTime;
