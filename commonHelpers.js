import{c}from"./assets/localStorage-bac96b72.js";import{S as o}from"./assets/vendor-0fc460d7.js";const m={list:document.querySelector(".favorite_list")},n=JSON.parse(localStorage.getItem(c.LS))??[];function _(e){return e.map(({id:a,downloads:l,views:i,likes:r,webformatURL:t,tags:g,largeImageURL:s})=>`<li data-id="${a}" class="gallery_item">
        <a class="gallery_link" href="${s}">
          <img class="gallery_img" src="${t}" data-sourse="${s}" alt="${g}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-downloads"></use>
            </svg>
            ${l}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-heart"></use>
            </svg>
            ${r}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-search"></use>
            </svg>
            ${i}
          </li>
          <li class="gallery_item_params_link current">
           <svg width="40" height="40">
          <use class="favorite_svg"  href="../img/sprite.svg#icon-star-solid"></use>
        </svg>
        </li>
          </ul>
          
          </li>
          `).join("")}m.list.insertAdjacentHTML("beforeend",_(n));const h=new o(".favorite_list a",{captionDelay:250,captionsData:"alt"});h.refresh();
//# sourceMappingURL=commonHelpers.js.map
