(()=>{var e={267:()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-hook~=anchor-link]").forEach((function(e){e.addEventListener("click",(function(o){o.preventDefault();var t=document.querySelector(e.getAttribute("href"));window.scrollTo({top:t.offsetTop-40,behavior:"smooth"})}))}))}))},938:()=>{document.addEventListener("DOMContentLoaded",(function(){document.documentElement.style.setProperty("--vh","".concat(.01*window.innerHeight,"px")),window.addEventListener("resize",(function(){document.documentElement.style.setProperty("--vh","".concat(.01*window.innerHeight,"px"))}))}))}},o={};function t(n){var d=o[n];if(void 0!==d)return d.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-hook~=header]"),o=document.querySelector("[data-hook~=header-button]"),t=document.querySelectorAll("[data-hook~=header-link]"),n=document.querySelector("[data-hook~=header-logo]"),d=function(){return e.classList.contains("header_open")},r=function(){d()&&(e.classList.remove("header_open"),document.body.style.position="static",document.body.style.width="auto",document.body.style.overflowY="visible",window.scrollTo(0,-parseInt(document.body.style.top)),document.body.style.top=null)};o.onclick=function(){return d()?r():void(d()||(e.classList.add("header_open"),document.body.style.top="".concat(-document.documentElement.scrollTop,"px"),document.body.style.position="fixed",document.body.style.width="100%",document.body.style.overflowY="scroll"))},t.forEach((function(e){return e.addEventListener("click",r)})),n.onclick=function(){return window.scrollTo({top:0,behavior:"smooth"})}})),t(267),t(938)})()})();