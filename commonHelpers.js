import{c as l}from"./assets/localStorage-f304c935.js";import{S as o}from"./assets/vendor-0fc460d7.js";const a={list:document.querySelector(".favorite_list"),btnClear:document.querySelector(".btn_clear")},m=JSON.parse(localStorage.getItem(l.LS))??[];a.btnClear.addEventListener("click",v);function _(e){return e.map(({id:t,downloads:i,views:r,likes:c,webformatURL:g,tags:n,largeImageURL:s})=>`<li data-id="${t}" class="gallery_item">
        <a class="gallery_link" href="${s}">
          <img class="gallery_img" src="${g}" data-sourse="${s}" alt="${n}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-downloads"></use>
            </svg>
            ${i}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-heart"></use>
            </svg>
            ${c}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-search"></use>
            </svg>
            ${r}
          </li>
          <li class="gallery_item_params_link current">
           <svg width="40" height="40">
          <use class="favorite_svg"  href="../img/sprite.svg#icon-basket-delete"></use>
        </svg>
        </li>
          </ul>
          
          </li>
          `).join("")}a.list.insertAdjacentHTML("beforeend",_(m));const h=new o(".favorite_list a",{captionDelay:250,captionsData:"alt"});h.refresh();function v(e){localStorage.removeItem(l.LS),window.location.href="./index.html"}
//# sourceMappingURL=commonHelpers.js.map
