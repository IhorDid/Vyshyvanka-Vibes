import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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

// pixabay gallery

const elements = {
  searcForm: document.querySelector('#present_form'),
  list: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
let searchInput;
let dataArr;
const arrImg = [];

hideLoader();
elements.searcForm.addEventListener('submit', onSearchForm);
elements.list.addEventListener('click', onFavoriteClick);

function hideLoader() {
  elements.loader.style.display = 'none';
}

function showLoader() {
  elements.loader.style.display = 'block';
}
function onSearchForm(e) {
  e.preventDefault();
  searchInput = e.currentTarget.elements.fieldSearch;
  showLoader();
  setTimeout(() => {
    servicePixabay(searchInput.value)
      .then(data => {
        dataArr = data;
        if (!data.hits.length) {
          iziToast.show({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topCenter',
            backgroundColor: 'rgba(252, 249, 249, 1)',
            messageColor: '#000',
            zindex: '10000000',
          });
        }
        elements.list.innerHTML = createMarkup(data.hits);
        const galleryLibrary = new SimpleLightbox('.gallery a', {
          captionDelay: 250,
          captionsData: 'alt',
        });
        galleryLibrary.refresh();
      })
      .catch(err => console.log(err))
      .finally(() => {
        hideLoader();
        e.target.reset();
      });
  }, 2000);
}

function servicePixabay(word) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42170319-af092c1d236dd53a733e41db9';
  const params = new URLSearchParams({
    key: API_KEY,
    q: word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
// вышиванка
function createMarkup(arr) {
  return arr
    .map(
      ({ id, downloads, views, likes, webformatURL, tags, largeImageURL }) =>
        `<li data-id="${id}" class="gallery_item">
        <a class="gallery_link" href="${largeImageURL}">
          <img class="gallery_img" src="${webformatURL}" data-sourse="${largeImageURL}" alt="${tags}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-downloads"></use>
            </svg>
            ${downloads}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-heart"></use>
            </svg>
            ${likes}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-search"></use>
            </svg>
            ${views}
          </li>
          <li class="gallery_item_params_link current">
           <svg width="40" height="40">
          <use class="favorite_svg"  href="../img/sprite.svg#icon-star-solid"></use>
        </svg>
        </li>
          </ul>
          
          </li>
          `
    )
    .join('');
}

// function onFavoriteClick(evt) {
//   const currentImgs = evt.target.closest('.gallery_item');
//   const currentId = Number(currentImgs.dataset.id);

//   if (evt.target.classList.contains('favorite_svg')) {
//     evt.target.classList.add('active_svg');

//     const currentImg = dataArr.hits.find(hit => currentId === hit.id);
//     console.log(currentImg);
//     arrImg.push(currentImg);
//     localStorage.setItem('LS', JSON.stringify(arrImg));
//   }

//   if (evt.target.classList.contains('active_svg')) {
//     evt.target.classList.remove('active_svg');
//     localStorage.removeItem('LS');
//   }
// }

function onFavoriteClick(evt) {
  const currentImgs = evt.target.closest('.gallery_item');
  const currentId = Number(currentImgs.dataset.id);

  if (evt.target.classList.contains('favorite_svg')) {
    if (evt.target.classList.contains('active_svg')) {
      evt.target.classList.remove('active_svg');
      // Отримання поточного масиву об'єктів з localStorage
      const storedData = JSON.parse(localStorage.getItem('LS')) || [];
      // Фільтрація масиву, щоб залишити тільки ті об'єкти, які не відповідають поточному Id
      const updatedData = storedData.filter(obj => obj.id !== currentId);
      // Збереження оновленого масиву в localStorage
      localStorage.setItem('LS', JSON.stringify(updatedData));
    } else {
      evt.target.classList.add('active_svg');
      // Отримання об'єкта, який відповідає поточному Id
      const currentImg = dataArr.hits.find(hit => currentId === hit.id);
      // Додавання об'єкта до масиву
      arrImg.push(currentImg);
      // Збереження масиву в localStorage
      localStorage.setItem('LS', JSON.stringify(arrImg));
    }
  }
}
