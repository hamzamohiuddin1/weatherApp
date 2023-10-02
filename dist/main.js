(()=>{"use strict";var e={774:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,'body {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 16.7vh 76.6vh 6.7vh;\n    grid-template-columns: 16.7vw 83.3vw;\n    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n#content {\n    display: flex;\n    grid-area: 0 / 0 / 1 / -1;\n\n}\n\n#header {\n    display: flex;\n    background-color: antiquewhite;\n    grid-area: 1 / 1 / 2 / -1;\n}\n\n#cells {\n    flex: 1;\n    display: flex;\n    justify-content: flex-start;\n    gap: 20px;\n    padding-right: 8%;\n}\n\n.cell {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\nul {\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=o(e,r),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),l=n.n(s),c=n(216),d=n.n(c),u=n(589),p=n.n(u),m=n(774),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h={basicRequest:async function(e){const t=await fetch(this.generateURL(e),{mode:"cors"});return(await t.json()).forecast.forecastday},getCelsius:async function(e,t){const n=[],o=await this.basicRequest(t);console.log(o);for(let t=0;t<24;t++)n.push(o[e].hour[t].temp_c);return n},getFahrenheit:async function(e,t){const n=[],o=await this.basicRequest(t);console.log(o);for(let t=0;t<24;t++)n.push(o[e].hour[t].temp_f);return n},generateURL:e=>`http://api.weatherapi.com/v1/forecast.json?key=0512e4ab4e7644bb96901409230210&q=${e}&days=7&aqi=no&alerts=no`},y=(()=>{const e=(new Date).getDay(),t={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",7:"Sunday",8:"Monday",9:"Tuesday",10:"Wednesday",11:"Thursday",12:"Friday",13:"Saturday"};return{displayAll:()=>{y.displayCells(y.mode,y.location),y.displayLocationForm(),y.displayToggleForm()},generateCell:async function(n,o,r){const a=document.createElement("div");a.classList.add("cell");const i=document.createElement("ul");i.classList.add("forecast");let s=[];s="C"==o?String(await h.getCelsius(n,r)).split(","):String(await h.getFahrenheit(n,r)).split(",");let l=document.createElement("p");l.classList.add("cellHeader"),l.textContent=t[n+e],a.appendChild(l);for(let e=0;e<24;e++){let t=document.createElement("li");t.classList.add("forecastItem"),t.textContent=`${s[e]}º ${o}`,i.appendChild(t)}return a.appendChild(i),a},displayCells:async function(e,t){console.log(t);const n=document.querySelector("div#cells"),o=document.createElement("div");o.id="cells";const r=this.generateFirstCell();o.appendChild(r);for(let n=0;n<7;n++){let r=await this.generateCell(n,e,t);o.appendChild(r)}n.replaceWith(o)},displayLocationForm:()=>{const e=(new g).form;document.querySelector(".locationform")?document.querySelector(".locationform").replaceWith(e):document.querySelector("#sidebar").appendChild(e)},generateFirstCell:()=>{let e=document.createElement("div");e.classList.add("cell");let t=document.createElement("ul");t.classList.add("times");let n=document.createElement("p");n.classList.add("cellHeader"),n.textContent="Time",e.appendChild(n);for(let e=0;e<24;e++){let n=document.createElement("li");n.textContent=`${e}:00`,t.appendChild(n)}return e.appendChild(t),e},displayToggleForm:(e,t)=>{let n=new v(e,t);n=n.form,document.querySelector(".toggleform")?document.querySelector(".toggleform").replaceWith(n):document.querySelector("#sidebar").appendChild(n)},mode:"F",location:"london"}})();class g{constructor(){this.form=this.generateForm()}get form(){return this._form}set form(e){this._form=e}generateForm(e){console.log("generating form");let t=document.createElement("form");t.setAttribute("method","post"),t.setAttribute("action","submit.php"),t.classList.add("locationform");let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("name","location"),n.setAttribute("placeholder","ex. London");let o=document.createElement("input");return o.setAttribute("type","button"),o.setAttribute("name","button"),o.setAttribute("value","Submit"),o.addEventListener("click",(function(e){y.location=this.form.location.value,y.displayAll(y.mode,y.location)})),t.appendChild(n),t.appendChild(o),t}}class v{constructor(){this.form=this.generateForm()}get form(){return this._form}set form(e){this._form=e}generateForm(e,t){console.log("generating form");let n=document.createElement("form");n.setAttribute("method","post"),n.setAttribute("action","submit.php"),n.classList.add("toggleform");let o=document.createElement("input");return o.setAttribute("type","button"),o.setAttribute("name","button"),o.setAttribute("value","Submit"),o.addEventListener("click",(function(e){"F"==y.mode?(y.mode="C",y.displayAll(y.mode,y.location)):(y.mode="F",y.displayAll(y.mode,y.location))})),n.appendChild(o),n}}const b=new Date;console.log(b.getDay()),y.displayAll()})()})();