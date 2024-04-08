import{i as h,S as y}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=document.querySelector("body"),g=document.querySelector(".btn-theme");g.addEventListener("click",p);function p(){f.classList.toggle("theme")}let l=null;const v=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),_=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");function L(){l=setInterval(w,1e3)}function w(){const o=new Date(2024,3,31,2,49,0)-new Date;if(o<=0){clearInterval(l);return}const{days:n,hours:e,minutes:t,seconds:a}=E(o);v.textContent=i(n),_.textContent=i(t),S.textContent=i(e),b.textContent=i(a)}function E(r){const t=Math.floor(r/864e5),a=Math.floor(r%864e5/36e5),d=Math.floor(r%864e5%36e5/6e4),m=Math.floor(r%864e5%36e5%6e4/1e3);return{days:t,hours:a,minutes:d,seconds:m}}function i(r){return String(r).padStart(2,"0")}L();const c={searcForm:document.querySelector("#present_form"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};u();c.searcForm.addEventListener("submit",x);function u(){c.loader.style.display="none"}function q(){c.loader.style.display="block"}function x(r){r.preventDefault();const s=r.currentTarget.elements.fieldSearch;q(),setTimeout(()=>{D(s.value).then(o=>{o.hits.length||h.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"}),c.list.innerHTML=T(o.hits),new y(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(o=>console.log(o)).finally(()=>{u(),r.target.reset()})},2e3)}function D(r){const s="https://pixabay.com/api/",o="42170319-af092c1d236dd53a733e41db9",n=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${n}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function T(r){return r.map(({downloads:s,views:o,likes:n,webformatURL:e,tags:t,largeImageURL:a})=>`<li class="gallery_item">
        <a class="gallery_link" href="${a}">
          <img class="gallery_img" src="${e}" data-sourse="${a}" alt="${t}" />
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
            ${n}
          </li>
          <li class="gallery_item_params_link current">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-search"></use>
            </svg>
            ${o}
          </li>
          </ul>
          </li>
          `).join("")}
//# sourceMappingURL=commonHelpers.js.map
