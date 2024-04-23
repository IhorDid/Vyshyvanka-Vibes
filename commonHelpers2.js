import{c as d}from"./assets/localStorage-f304c935.js";import{i as v,S as _}from"./assets/vendor-0fc460d7.js";const L=document.querySelector("body"),b=document.querySelector(".btn-theme");b.addEventListener("click",E);function E(){L.classList.toggle("theme")}let h=null;const k=document.querySelector("[data-days]"),w=document.querySelector("[data-hours]"),x=document.querySelector("[data-minutes]"),I=document.querySelector("[data-seconds]");function q(){h=setInterval(C,1e3)}function C(){const n=new Date(2024,3,31,2,49,0)-new Date;if(n<=0){clearInterval(h);return}const{days:s,hours:r,minutes:o,seconds:l}=T(n);k.textContent=u(s),x.textContent=u(o),w.textContent=u(r),I.textContent=u(l)}function T(e){const o=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:l,minutes:c,seconds:p}}function u(e){return String(e).padStart(2,"0")}q();const a={searcForm:document.querySelector("#present_form"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let m,y;const $=JSON.parse(localStorage.getItem(d.FS))??[],i=JSON.parse(localStorage.getItem(d.LS))??[];document.addEventListener("DOMContentLoaded",D);f();a.searcForm.addEventListener("submit",F);a.list.addEventListener("click",O);function D(){i&&a.list.insertAdjacentHTML("beforeend",S($))}function f(){a.loader.style.display="none"}function M(){a.loader.style.display="block"}function F(e){e.preventDefault(),m=e.currentTarget.elements.fieldSearch,M(),setTimeout(()=>{N(m.value).then(t=>{y=t,t.hits.length||v.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"}),localStorage.setItem(d.FS,JSON.stringify(t.hits)),a.list.innerHTML=S(t.hits),new _(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(t=>console.log(t)).finally(()=>{f(),e.target.reset()})},2e3)}function N(e){const t="https://pixabay.com/api/",n="42170319-af092c1d236dd53a733e41db9",s=new URLSearchParams({key:n,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function S(e){return e.map(({id:t,downloads:n,views:s,likes:r,webformatURL:o,tags:l,largeImageURL:c})=>`<li data-id="${t}" class="gallery_item">
        <a class="gallery_link" href="${c}">
          <img class="gallery_img" src="${o}" data-sourse="${c}" alt="${l}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="./img/sprite.svg#icon-downloads"></use>
            </svg>
            ${n}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="./img/sprite.svg#icon-heart"></use>
            </svg>
            ${r}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="./img/sprite.svg#icon-search"></use>
            </svg>
            ${s}
          </li>
          <li class="gallery_item_params_link current">
           <svg width="40" height="40">
          <use class="favorite_svg"  href="./img/sprite.svg#icon-star-solid"></use>
        </svg>
        </li>
          </ul>
          
          </li>
          `).join("")}function O(e){const t=e.target.closest(".gallery_item"),n=Number(t.dataset.id);if(e.target.classList.contains("favorite_svg")){e.target.classList.toggle("active_svg");const s=i.findIndex(r=>r.id===n);if(s!==-1)i.splice(s,1);else{const r=y.hits.find(o=>n===o.id);i.push(r)}localStorage.setItem(d.LS,JSON.stringify(i))}}const j=document.querySelector(".banner"),A=document.querySelector(".banner_text");let g=10;setInterval(()=>{g-=1,A.textContent=`Залишилося ${g} секунд`,g||(j.style.display="none")},1e3);function J(e,t){let n="";for(let s=0;s<e;s++){let r="";for(let o=0;o<t;o++)o===Math.floor(t/2)?r+="#":r+=".";n+=r+`
`}return n}const P=J(7,11);console.log(P);
//# sourceMappingURL=commonHelpers2.js.map
