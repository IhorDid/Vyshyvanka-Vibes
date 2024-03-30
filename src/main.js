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
let userSelectedDate;

const inputEl = document.querySelector('.timer-input');
flatpickr(inputEl, {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log(userSelectedDate);
  },
});
