import{c as d}from"./assets/localStorage-f304c935.js";import{i as _,S as L}from"./assets/vendor-0fc460d7.js";const b=document.querySelector("body"),E=document.querySelector(".btn-theme");E.addEventListener("click",k);function k(){b.classList.toggle("theme")}let h=null;const x=document.querySelector("[data-days]"),I=document.querySelector("[data-hours]"),q=document.querySelector("[data-minutes]"),w=document.querySelector("[data-seconds]");function C(){h=setInterval($,1e3)}function $(){const s=new Date(2024,3,31,2,49,0)-new Date;if(s<=0){clearInterval(h);return}const{days:n,hours:r,minutes:o,seconds:i}=D(s);x.textContent=u(n),q.textContent=u(o),I.textContent=u(r),w.textContent=u(i)}function D(e){const o=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),v=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:i,minutes:c,seconds:v}}function u(e){return String(e).padStart(2,"0")}C();const a={searcForm:document.querySelector("#present_form"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let m,y;const T=JSON.parse(localStorage.getItem(d.FS))??[],l=JSON.parse(localStorage.getItem(d.LS))??[];document.addEventListener("DOMContentLoaded",M);f();a.searcForm.addEventListener("submit",N);a.list.addEventListener("click",p);function M(){l&&a.list.insertAdjacentHTML("beforeend",S(T)),p()}function f(){a.loader.style.display="none"}function F(){a.loader.style.display="block"}function N(e){e.preventDefault(),m=e.currentTarget.elements.fieldSearch,F(),setTimeout(()=>{O(m.value).then(t=>{y=t,t.hits.length||_.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"}),localStorage.setItem(d.FS,JSON.stringify(t.hits)),a.list.innerHTML=S(t.hits),new L(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(t=>console.log(t)).finally(()=>{f(),e.target.reset()})},2e3)}function O(e){const t="https://pixabay.com/api/",s="42170319-af092c1d236dd53a733e41db9",n=new URLSearchParams({key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${n}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function S(e){return e.map(({id:t,downloads:s,views:n,likes:r,webformatURL:o,tags:i,largeImageURL:c})=>`<li data-id="${t}" class="gallery_item">
        <a class="gallery_link" href="${c}">
          <img class="gallery_img" src="${o}" data-sourse="${c}" alt="${i}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-downloads"></use>
            </svg>
            ${s}
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
            ${n}
          </li>
          <li class="gallery_item_params_link current">
           <svg width="40" height="40">
          <use class="favorite_svg"  href="../img/sprite.svg#icon-star-solid"></use>
        </svg>
        </li>
          </ul>
          
          </li>
          `).join("")}function p(e){const t=e.target.closest(".gallery_item"),s=Number(t.dataset.id);if(e.target.classList.contains("favorite_svg")){e.target.classList.toggle("active_svg");const n=l.findIndex(r=>r.id===s);if(n!==-1)l.splice(n,1);else{const r=y.hits.find(o=>s===o.id);l.push(r)}localStorage.setItem(d.LS,JSON.stringify(l))}}const A=document.querySelector(".banner"),J=document.querySelector(".banner_text");let g=10;setInterval(()=>{g-=1,J.textContent=`Залишилося ${g} секунд`,g||(A.style.display="none")},1e3);
//# sourceMappingURL=commonHelpers2.js.map
