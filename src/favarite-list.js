import common from './localStorage.json';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const elements = {
  list: document.querySelector('.favorite_list'),
  btnClear: document.querySelector('.btn_clear'),
};

const storageData = JSON.parse(localStorage.getItem(common.LS)) ?? [];
elements.btnClear.addEventListener('click', onBtnClearClick);
// elements.list.addEventListener('click', onDeleteClick);
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
              <use href="./img/sprite.svg#icon-downloads"></use>
            </svg>
            ${downloads}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="./img/sprite.svg#icon-heart"></use>
            </svg>
            ${likes}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="./img/sprite.svg#icon-search"></use>
            </svg>
            ${views}
          </li>
          <li class="gallery_item_params_link current">
           <svg width="40" height="40">
          <use class="favorite_svg"  href="./img/sprite.svg#icon-basket-delete"></use>
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

function onBtnClearClick(evt) {
  localStorage.removeItem(common.LS);
  window.location.href = './index.html';
}

// function onDeleteClick(evt) {
//   const currentImgs = evt.target.closest('.gallery_item');
//   const currentId = Number(currentImgs.dataset.id);
//   const targetClick = evt.target.classList.contains('favorite_svg');
//   if (!targetClick) {
//     return;
//   }
//   const updateStorage = storageData.filter(obj => obj.id !== currentId);
//   localStorage.setItem(common.LS, JSON.stringify(updateStorage));
// const newStorageDate = JSON.parse(localStorage.getItem(common.LS)) ?? [];
//   elements.list.innerHTML = createMarkup(updateStorage);
// }

// function onFavoriteClick(evt) {
//   const currentImgs = evt.target.closest('.gallery_item');
//   const currentId = Number(currentImgs.dataset.id);

//   if (evt.target.classList.contains('favorite_svg')) {
// evt.target.classList.toggle('active_svg');

//     const index = arrImg.findIndex(arr => arr.id === currentId);
//     if (index !== -1) {
//       arrImg.splice(index, 1);
//     } else {
//       const currentImg = dataArr.hits.find(hit => currentId === hit.id);
//       arrImg.push(currentImg);
//     }
//     localStorage.setItem(common.LS, JSON.stringify(arrImg));
//   }
// }
