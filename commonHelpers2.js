import{c as f}from"./assets/localStorage-bac96b72.js";import{i as p,S as v}from"./assets/vendor-0fc460d7.js";const _=document.querySelector("body"),S=document.querySelector(".btn-theme");S.addEventListener("click",L);function L(){_.classList.toggle("theme")}let g=null;const b=document.querySelector("[data-days]"),k=document.querySelector("[data-hours]"),w=document.querySelector("[data-minutes]"),E=document.querySelector("[data-seconds]");function q(){g=setInterval(x,1e3)}function x(){const r=new Date(2024,3,31,2,49,0)-new Date;if(r<=0){clearInterval(g);return}const{days:a,hours:s,minutes:n,seconds:o}=I(r);b.textContent=c(a),w.textContent=c(n),k.textContent=c(s),E.textContent=c(o)}function I(e){const n=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:o,minutes:l,seconds:y}}function c(e){return String(e).padStart(2,"0")}q();const i={searcForm:document.querySelector("#present_form"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let d,m;const u=[];h();i.searcForm.addEventListener("submit",C);i.list.addEventListener("click",M);function h(){i.loader.style.display="none"}function $(){i.loader.style.display="block"}function C(e){e.preventDefault(),d=e.currentTarget.elements.fieldSearch,$(),setTimeout(()=>{D(d.value).then(t=>{m=t,t.hits.length||p.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"}),i.list.innerHTML=T(t.hits),new v(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(t=>console.log(t)).finally(()=>{h(),e.target.reset()})},2e3)}function D(e){const t="https://pixabay.com/api/",r="42170319-af092c1d236dd53a733e41db9",a=new URLSearchParams({key:r,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${a}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function T(e){return e.map(({id:t,downloads:r,views:a,likes:s,webformatURL:n,tags:o,largeImageURL:l})=>`<li data-id="${t}" class="gallery_item">
        <a class="gallery_link" href="${l}">
          <img class="gallery_img" src="${n}" data-sourse="${l}" alt="${o}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-downloads"></use>
            </svg>
            ${r}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-heart"></use>
            </svg>
            ${s}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-search"></use>
            </svg>
            ${a}
          </li>
          <li class="gallery_item_params_link current">
           <svg width="40" height="40">
          <use class="favorite_svg"  href="../img/sprite.svg#icon-star-solid"></use>
        </svg>
        </li>
          </ul>
          
          </li>
          `).join("")}function M(e){const t=e.target.closest(".gallery_item"),r=Number(t.dataset.id);if(e.target.classList.contains("favorite_svg")){e.target.classList.toggle("active_svg");const a=u.findIndex(s=>s.id===r);if(a!==-1)u.splice(a,1);else{const s=m.hits.find(n=>r===n.id);u.push(s)}localStorage.setItem(f.LS,JSON.stringify(u))}}
//# sourceMappingURL=commonHelpers2.js.map
