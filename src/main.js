// body
const bodyEl = document.querySelector('body');
const themeEl = document.querySelector('.btn-theme');
themeEl.addEventListener('click', onThemeClick);
function onThemeClick() {
  bodyEl.classList.toggle('theme');
}

// timer-order section
// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

const inputEl = document.querySelector('.timer-input');
const btnEl = document.querySelector('.timer_btn');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnEl.addEventListener('click', onBtnClick);

flatpickr(inputEl, {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectedDate > currentDate) {
      btnEl.disabled = false;
    } else {
      btnEl.disabled = true;
      iziToast.show({
        position: 'topCenter',
        backgroundColor: '#ff4d4d',
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    }
  },
});
clearInterval;
function onBtnClick() {
  startTimer();
  btnEl.disabled = true;
  inputEl.disabled = true;
}

function startTimer() {
  setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentDate = new Date();
  const differenceTime = userSelectedDate - currentDate;

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
