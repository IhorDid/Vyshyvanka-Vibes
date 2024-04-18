import{i as y,S as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const v=document.querySelector("body"),S=document.querySelector(".btn-theme");S.addEventListener("click",_);function _(){v.classList.toggle("theme")}let g=null;const L=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),w=document.querySelector("[data-minutes]"),E=document.querySelector("[data-seconds]");function q(){g=setInterval(D,1e3)}function D(){const o=new Date(2024,3,31,2,49,0)-new Date;if(o<=0){clearInterval(g);return}const{days:a,hours:e,minutes:r,seconds:n}=I(o);L.textContent=l(a),w.textContent=l(r),b.textContent=l(e),E.textContent=l(n)}function I(t){const r=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:n,minutes:c,seconds:f}}function l(t){return String(t).padStart(2,"0")}q();const i={searcForm:document.querySelector("#present_form"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let u,m;const d=[];h();i.searcForm.addEventListener("submit",k);i.list.addEventListener("click",O);function h(){i.loader.style.display="none"}function $(){i.loader.style.display="block"}function k(t){t.preventDefault(),u=t.currentTarget.elements.fieldSearch,$(),setTimeout(()=>{x(u.value).then(s=>{m=s,s.hits.length||y.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"}),i.list.innerHTML=C(s.hits),new p(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(s=>console.log(s)).finally(()=>{h(),t.target.reset()})},2e3)}function x(t){const s="https://pixabay.com/api/",o="42170319-af092c1d236dd53a733e41db9",a=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function C(t){return t.map(({id:s,downloads:o,views:a,likes:e,webformatURL:r,tags:n,largeImageURL:c})=>`<li data-id="${s}" class="gallery_item">
        <a class="gallery_link" href="${c}">
          <img class="gallery_img" src="${r}" data-sourse="${c}" alt="${n}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-downloads"></use>
            </svg>
            ${o}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-heart"></use>
            </svg>
            ${e}
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
          `).join("")}function O(t){const s=t.target.closest(".gallery_item"),o=Number(s.dataset.id);if(t.target.classList.contains("favorite_svg"))if(t.target.classList.contains("active_svg")){t.target.classList.remove("active_svg");const e=(JSON.parse(localStorage.getItem("LS"))||[]).filter(r=>r.id!==o);localStorage.setItem("LS",JSON.stringify(e))}else{t.target.classList.add("active_svg");const a=m.hits.find(e=>o===e.id);d.push(a),localStorage.setItem("LS",JSON.stringify(d))}}
//# sourceMappingURL=commonHelpers.js.map
