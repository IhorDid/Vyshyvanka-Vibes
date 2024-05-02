import{c as r}from"./assets/localStorage-f304c935.js";import{S as m}from"./assets/vendor-0fc460d7.js";const n={list:document.querySelector(".favorite_list"),btnClear:document.querySelector(".btn_clear")},l=JSON.parse(localStorage.getItem(r.LS))??[];n.btnClear.addEventListener("click",_);n.list.addEventListener("click",v);function u(t){return t.map(({id:e,downloads:a,views:c,likes:s,webformatURL:i,tags:g,largeImageURL:o})=>`<li data-id="${e}" class="gallery_item">
        <a class="gallery_link" href="${o}">
          <img class="gallery_img" src="${i}" data-sourse="${o}" alt="${g}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="./img/sprite.svg#icon-downloads"></use>
            </svg>
            ${a}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="./img/sprite.svg#icon-heart"></use>
            </svg>
            ${s}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="./img/sprite.svg#icon-search"></use>
            </svg>
            ${c}
          </li>
          <li class="gallery_item_params_link current">
           <svg width="40" height="40">
          <use class="favorite_svg"  href="./img/sprite.svg#icon-basket-delete"></use>
        </svg>
        </li>
          </ul>
          
          </li>
          `).join("")}n.list.insertAdjacentHTML("beforeend",u(l));const d=new m(".favorite_list a",{captionDelay:250,captionsData:"alt"});d.refresh();function _(t){localStorage.removeItem(r.LS),window.location.href="./index.html"}function v(t){const e=t.target.closest(".gallery_item");console.log(e);const a=Number(e.dataset.id);if(!e||!t.target.classList.contains("favorite_svg"))return;e.remove();const s=l.findIndex(({id:i})=>i===a);s!==-1&&l.splice(s,1),localStorage.setItem(r.LS,JSON.stringify(l))}
//# sourceMappingURL=commonHelpers.js.map
