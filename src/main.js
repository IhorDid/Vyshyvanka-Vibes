// body
const bodyEl = document.querySelector('body');
const themeEl = document.querySelector('.btn-theme');
themeEl.addEventListener('click', onThemeClick);
function onThemeClick() {
  bodyEl.classList.toggle('theme');
}

// timer-order section
let intervalId = null;
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const userSelectedDate = new Date(2024, 3, 31, 2, 49, 0);
  const currentDate = new Date();
  const differenceTime = userSelectedDate - currentDate;
  if (differenceTime <= 0) {
    clearInterval(intervalId);
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(differenceTime);
  daysEl.textContent = addLeadingZero(days);
  minutesEl.textContent = addLeadingZero(minutes);
  hoursEl.textContent = addLeadingZero(hours);
  secondsEl.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startTimer();

fetch('https://rickandmortyapi.com/api/character');
