(()=>{"use strict";var e,t={151:(e,t,i)=>{var n=i(205),s=i(296);n.Z.use([s.Z]);var r=i(689),l=i.n(r),a=i(403),d=i(686);n.Z.use([s.Z,a.Z,d.Z]),n.Z.use([s.Z,a.Z,d.Z]);var o=[{title:"с дизайнерами",bullet:"дизайнерам"},{title:"для объектов",bullet:"объектам"},{title:"для объектов",bullet:"дистрибьютерам и оптовым покупателям"}];n.Z.use([s.Z]);i(985);n.Z.use([s.Z,a.Z,d.Z]),document.addEventListener("DOMContentLoaded",(function(){var e,t,i,s,r;window.sliders=[],function(){document.querySelector(".main__wrap"),document.querySelector(".aside");var e=document.querySelector("[data-cover-slider]"),t=e.querySelector("[data-cover-slider-counter]"),i=(window.innerWidth,window.innerWidth,window.innerHeight,new n.Z(e,{loop:!0,spaceBetween:20,navigation:{prevEl:e.querySelector("[data-cover-slider-prev]"),nextEl:e.querySelector("[data-cover-slider-next]")},on:{slideChangeTransitionEnd:function(){var e=+this.el.querySelector(".swiper-slide-active").dataset.swiperSlideIndex+1,i=this.slides.filter((function(e){return!e.classList.contains("swiper-slide-duplicate")})).length;t.innerHTML='\n          <div class="cover__slider-counter-active">0'.concat(e,'</div>\n          <div class="cover__slider-counter-length">0').concat(i,"</div>\n        ")}}}));window.sliders.push(i)}(),function(){l().init();var e=document.querySelector("[data-mission-slider]"),t=e.querySelector("[data-mission-slider-bullets]"),i=e.querySelector("[data-mission-slider-counter]"),s=new n.Z(e,{direction:"vertical",mousewheel:{releaseOnEdges:!0},touchReleaseOnEdges:!0,on:{init:function(){var e=this.slides.length,t=this.activeIndex+1;i.innerHTML='\n          <div class="mission__slider-counter-active">0'.concat(t,'</div>\n          <div class="mission__slider-counter-length">0').concat(e,"</div>\n        ")},slideChangeTransitionEnd:function(){var e=this.slides.length,t=this.activeIndex+1;i.innerHTML='\n          <div class="mission__slider-counter-active">0'.concat(t,'</div>\n          <div class="mission__slider-counter-length">0').concat(e,"</div>\n        "),this.isBeginning||this.isEnd?this.params.mousewheel.releaseOnEdges=!0:this.params.mousewheel.releaseOnEdges=!1}},pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'\n          <div class="'.concat(t,' mission__slider-bullet">\n            <div class="mission__slider-bullet-line"></div>\n            <div class="mission__slider-bullet-square"></div>\n          </div>\n        ')}}});window.sliders.push(s)}(),e=document.querySelector("[data-conditions-slider]"),t=e.querySelector("[data-conditions-slider-bullets]"),i=new n.Z(e,{mousewheel:{releaseOnEdges:!0},pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'\n          <div class="'.concat(t,' conditions__slider-bullet">\n\n            <div class="conditions__slider-bullet-line"></div>\n            <div class="conditions__slider-bullet-square">\n              <div class="conditions__slider-bullet-text text__md text--uppercase">\n                <div class="conditions__slider-bullet-text-number">').concat(e+1,"</div>\n                ").concat(o[e].bullet,"</div>\n            </div>\n          </div>\n        ")}},on:{slideChangeTransitionEnd:function(){this.isBeginning||this.isEnd?this.params.mousewheel.releaseOnEdges=!0:this.params.mousewheel.releaseOnEdges=!1}}}),window.sliders.push(i),s=document.querySelector("[data-projects-slider]"),r=new n.Z(s,{slidesPerView:3,spaceBetween:172,loop:!0,navigation:{prevEl:s.querySelector("[data-projects-slider-prev]"),nextEl:s.querySelector("[data-projects-slider-next]")}}),window.sliders.push(r),document.addEventListener("pointermove",(function(e){if(e.target.dataset.fadeItemSliderBullet){var t=e.target.closest("[data-fade-item-slider]"),i=t.querySelectorAll("[data-fade-item-slider-item]"),n=t.querySelectorAll("[data-fade-item-slider-bullet]"),s=Array.prototype.indexOf.call(n,e.target);i.forEach((function(e,t){s===t?e.classList.add("is-active"):e.classList.remove("is-active")})),n.forEach((function(e,t){s===t?e.classList.add("is-active"):e.classList.remove("is-active")}))}})),document.addEventListener("click",(function(e){if(e.target.dataset.fadeItemSliderBullet){var t=e.target.closest("[data-fade-item-slider]"),i=t.querySelectorAll("[data-fade-item-slider-item]"),n=t.querySelectorAll("[data-fade-item-slider-bullet]"),s=Array.prototype.indexOf.call(n,e.target);i.forEach((function(e,t){s===t?e.classList.add("is-active"):e.classList.remove("is-active")})),n.forEach((function(e,t){s===t?e.classList.add("is-active"):e.classList.remove("is-active")}))}}))}))}},i={};function n(e){var s=i[e];if(void 0!==s)return s.exports;var r=i[e]={exports:{}};return t[e].call(r.exports,r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,i,s,r)=>{if(!i){var l=1/0;for(o=0;o<e.length;o++){for(var[i,s,r]=e[o],a=!0,d=0;d<i.length;d++)(!1&r||l>=r)&&Object.keys(n.O).every((e=>n.O[e](i[d])))?i.splice(d--,1):(a=!1,r<l&&(l=r));a&&(e.splice(o--,1),t=s())}return t}r=r||0;for(var o=e.length;o>0&&e[o-1][2]>r;o--)e[o]=e[o-1];e[o]=[i,s,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var s,r,[l,a,d]=i,o=0;for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(d)var c=d(n);for(t&&t(i);o<l.length;o++)r=l[o],n.o(e,r)&&e[r]&&e[r][0](),e[l[o]]=0;return n.O(c)},i=self.webpackChunk=self.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var s=n.O(void 0,[597],(()=>n(151)));s=n.O(s)})();