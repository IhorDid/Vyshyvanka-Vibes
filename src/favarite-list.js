import common from './localStorage.json';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const elements = {
  list: document.querySelector('.favorite_list'),
};

const storageData = JSON.parse(localStorage.getItem(common.LS)) ?? [];

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

elements.list.insertAdjacentHTML('beforeend', createMarkup(storageData));
const galleryLibrary = new SimpleLightbox('.favorite_list a', {
  captionDelay: 250,
  captionsData: 'alt',
});
galleryLibrary.refresh();
