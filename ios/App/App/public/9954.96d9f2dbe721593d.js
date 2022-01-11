"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9954],{9954:(j,A,b)=>{b.r(A),b.d(A,{startInputShims:()=>Y});var p=b(8239),v=b(7360);const y=new WeakMap,L=(e,n,t,o=0)=>{y.has(e)!==t&&(t?B(e,n,o):C(e,n))},D=e=>e===e.getRootNode().activeElement,B=(e,n,t)=>{const o=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),y.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${s}px,${t}px,0) scale(0)`},C=(e,n)=>{const t=y.get(e);t&&(y.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},w="input, textarea, [no-blur], [contenteditable]",k=function(){var e=(0,p.Z)(function*(n,t,o,r,c){if(!o&&!r)return;const s=((e,n,t)=>((e,n,t,o)=>{const r=e.top,c=e.bottom,s=n.top,a=s+15,f=.75*Math.min(n.bottom,o-t)-c,S=a-r,d=Math.round(f<0?-f:S>0?-S:0),i=Math.min(d,r-s),h=Math.abs(i)/.3;return{scrollAmount:i,scrollDuration:Math.min(400,Math.max(150,h)),scrollPadding:t,inputSafeY:4-(r-a)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight))(n,o||r,c);if(o&&Math.abs(s.scrollAmount)<4)t.focus();else if(L(n,t,!0,s.inputSafeY),t.focus(),(0,v.r)(()=>n.click()),"undefined"!=typeof window){let u;const a=function(){var f=(0,p.Z)(function*(){void 0!==u&&clearTimeout(u),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",a),o&&(yield o.scrollByPoint(0,s.scrollAmount,s.scrollDuration)),L(n,t,!1,s.inputSafeY),t.focus()});return function(){return f.apply(this,arguments)}}(),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",a)};if(o){const f=yield o.getScrollElement();if(s.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",a),void(u=setTimeout(a,1e3))}a()}});return function(t,o,r,c,s){return e.apply(this,arguments)}}(),P="$ionPaddingTimer",T=(e,n)=>{if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const t=e.closest("ion-content");if(null===t)return;const o=t[P];o&&clearTimeout(o),n>0?t.style.setProperty("--keyboard-offset",`${n}px`):t[P]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px")},120)},Y=e=>{const n=document,t=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),r=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),u=Array.from(n.querySelectorAll("ion-input, ion-textarea")),a=new WeakMap,l=new WeakMap,f=function(){var d=(0,p.Z)(function*(i){yield new Promise(g=>(0,v.c)(i,g));const _=i.shadowRoot||i,h=_.querySelector("input")||_.querySelector("textarea"),m=i.closest("ion-content"),I=m?null:i.closest("ion-footer");if(h){if(m&&r&&!a.has(i)){const g=((e,n,t)=>{if(!t||!n)return()=>{};const o=u=>{D(n)&&L(e,n,u)},r=()=>L(e,n,!1),c=()=>o(!0),s=()=>o(!1);return(0,v.a)(t,"ionScrollStart",c),(0,v.a)(t,"ionScrollEnd",s),n.addEventListener("blur",r),()=>{(0,v.b)(t,"ionScrollStart",c),(0,v.b)(t,"ionScrollEnd",s),n.addEventListener("ionBlur",r)}})(i,h,m);a.set(i,g)}if((m||I)&&o&&!l.has(i)){const g=((e,n,t,o,r)=>{let c;const s=a=>{c=(0,v.p)(a)},u=a=>{if(!c)return;const l=(0,v.p)(a);!((e,n,t)=>{if(n&&t){const o=n.x-t.x,r=n.y-t.y;return o*o+r*r>e*e}return!1})(6,c,l)&&!D(n)&&(a.stopPropagation(),k(e,n,t,o,r))};return e.addEventListener("touchstart",s,!0),e.addEventListener("touchend",u,!0),()=>{e.removeEventListener("touchstart",s,!0),e.removeEventListener("touchend",u,!0)}})(i,h,m,I,t);l.set(i,g)}}});return function(_){return d.apply(this,arguments)}}();c&&(()=>{let e=!0,n=!1;const t=document;(0,v.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",s=>{if(n)return void(n=!1);const u=t.activeElement;if(!u||u.matches(w))return;const a=s.target;a!==u&&(a.matches(w)||a.closest(w)||(e=!1,setTimeout(()=>{e||u.blur()},50)))},!1)})(),s&&(e=>{const n=document;n.addEventListener("focusin",r=>{T(r.target,e)}),n.addEventListener("focusout",r=>{T(r.target,0)})})(t);for(const d of u)f(d);n.addEventListener("ionInputDidLoad",d=>{f(d.detail)}),n.addEventListener("ionInputDidUnload",d=>{(d=>{if(r){const i=a.get(d);i&&i(),a.delete(d)}if(o){const i=l.get(d);i&&i(),l.delete(d)}})(d.detail)})}}}]);