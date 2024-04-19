import{c as d}from"./assets/localStorage-45ca8791.js";import{i as v,S as _}from"./assets/vendor-0fc460d7.js";const L=document.querySelector("body"),b=document.querySelector(".btn-theme");b.addEventListener("click",k);function k(){L.classList.toggle("theme")}let m=null;const E=document.querySelector("[data-days]"),w=document.querySelector("[data-hours]"),I=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");function x(){m=setInterval(C,1e3)}function C(){const s=new Date(2024,3,31,2,49,0)-new Date;if(s<=0){clearInterval(m);return}const{days:a,hours:r,minutes:n,seconds:i}=D(s);E.textContent=u(a),I.textContent=u(n),w.textContent=u(r),q.textContent=u(i)}function D(e){const n=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:i,minutes:c,seconds:p}}function u(e){return String(e).padStart(2,"0")}x();const o={searcForm:document.querySelector("#present_form"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let g,h;const T=JSON.parse(localStorage.getItem(d.FS))??[],l=JSON.parse(localStorage.getItem(d.LS))??[];document.addEventListener("DOMContentLoaded",$);y();o.searcForm.addEventListener("submit",F);o.list.addEventListener("click",S);function $(){l&&o.list.insertAdjacentHTML("beforeend",f(T)),S()}function y(){o.loader.style.display="none"}function M(){o.loader.style.display="block"}function F(e){e.preventDefault(),g=e.currentTarget.elements.fieldSearch,M(),setTimeout(()=>{N(g.value).then(t=>{h=t,t.hits.length||v.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"}),localStorage.setItem(d.FS,JSON.stringify(t.hits)),o.list.innerHTML=f(t.hits),new _(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(t=>console.log(t)).finally(()=>{y(),e.target.reset()})},2e3)}function N(e){const t="https://pixabay.com/api/",s="42170319-af092c1d236dd53a733e41db9",a=new URLSearchParams({key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${a}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function f(e){return e.map(({id:t,downloads:s,views:a,likes:r,webformatURL:n,tags:i,largeImageURL:c})=>`<li data-id="${t}" class="gallery_item">
        <a class="gallery_link" href="${c}">
          <img class="gallery_img" src="${n}" data-sourse="${c}" alt="${i}" />
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
            ${a}
          </li>
          <li class="gallery_item_params_link current">
           <svg width="40" height="40">
          <use class="favorite_svg"  href="../img/sprite.svg#icon-star-solid"></use>
        </svg>
        </li>
          </ul>
          
          </li>
          `).join("")}function S(e){const t=e.target.closest(".gallery_item"),s=Number(t.dataset.id);if(e.target.classList.contains("favorite_svg")){e.target.classList.toggle("active_svg");const a=l.findIndex(r=>r.id===s);if(a!==-1)l.splice(a,1);else{const r=h.hits.find(n=>s===n.id);l.push(r)}localStorage.setItem(d.LS,JSON.stringify(l))}}
//# sourceMappingURL=commonHelpers2.js.map
