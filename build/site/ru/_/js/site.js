!function(){"use strict";var i,c,e,r,s,l,d=!!document.documentMode,u=/^sect(\d)$/,o=document.querySelector(".nav-container");function t(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=c.querySelector('.nav-link[href="'+n+'"]')))){n=document.getElementById(n.slice(1));if(n)for(var i=n,o=document.querySelector("article.doc");(i=i.parentNode)&&i!==o;){var a=i.id;if((a=!a&&(a=u.test(i.className))?(i.firstElementChild||{}).id:a)&&(e=c.querySelector('.nav-link[href="#'+a+'"]')))break}}if(e)t=e.parentNode;else{if(!l)return;e=(t=l).querySelector(".nav-link")}t!==s&&(f(c,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),v(s=t),m(c,e))}function v(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function n(){var e,t,n,i;this.classList.toggle("is-active")&&(e=parseFloat(window.getComputedStyle(this).marginTop),t=this.getBoundingClientRect(),n=c.getBoundingClientRect(),0<(i=(t.bottom-n.top-n.height+e).toFixed())&&(c.scrollTop+=Math.min((t.top-n.top-e).toFixed(),i)))}function a(e){p(e);e=document.documentElement;e.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),o.classList.remove("is-active"),e.removeEventListener("click",a)}function p(e){e.stopPropagation()}function m(t,e){var n=t.getBoundingClientRect(),i=n.height,o=window.getComputedStyle(r);"sticky"===o.position&&(i-=n.top-parseFloat(o.top));var a,c=Math.max(0,.5*(e.getBoundingClientRect().height-i)+e.offsetTop);t.scrollTop!==c&&(e=window.getComputedStyle(document.documentElement),d||"MozAppearance"in e||"auto"===e.scrollBehavior?t.scrollTop=c:(a=function(e){window.pageYOffset===e?t.scrollTop=c:window.requestAnimationFrame(a.bind(null,window.pageYOffset))},setTimeout(a.bind(null,window.pageYOffset),100)))}function f(e,t){return[].slice.call(e.querySelectorAll(t))}!o||(i=document.querySelector(".nav-toggle"))&&(i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return a(e);p(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),o.classList.add("is-active");var n=r.getBoundingClientRect(),e=window.innerHeight-Math.round(n.top);Math.round(n.height)!==e&&(r.style.height=e+"px");t.addEventListener("click",a)}),o.addEventListener("click",p),(c=o.querySelector("[data-panel=menu]"))&&(e=o.querySelector("[data-panel=explore]"),r=o.querySelector(".nav"),s=c.querySelector(".is-current-page"),(l=s)?(v(s),m(c,s.querySelector(".nav-link"))):c.scrollTop=0,f(c,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",n.bind(t));e=function(e,t){e=e.nextElementSibling;return(!e||!t||e[e.matches?"matches":"msMatchesSelector"](t))&&e}(e,".nav-text");e&&(e.style.cursor="pointer",e.addEventListener("click",n.bind(t)))}),e&&e.querySelector(".context").addEventListener("click",function(){f(r,"[data-panel]").forEach(function(e){e.classList.toggle("is-active")})}),c.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),c.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&t(),window.addEventListener("hashchange",t))))}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2,10);if(!(t<0)){for(var o="article.doc",d=document.querySelector(o),n=[],i=0;i<=t;i++){var r=[o];if(i){for(var a=1;a<=i;a++)r.push((2===a?".sectionbody>":"")+".sect"+a);r.push("h"+(i+1)+"[id]")}else r.push("h1[id].sect0");n.push(r.join(">"))}var c,s,l,u=(c=n.join(","),s=d.parentNode,[].slice.call((s||document).querySelectorAll(c)));if(!u.length)return e.parentNode.removeChild(e);var f={},m=u.reduce(function(e,t){var o=document.createElement("a");o.textContent=t.textContent,f[o.href="#"+t.id]=o;var n=document.createElement("li");return n.dataset.level=parseInt(t.nodeName.slice(1),10)-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),p=e.querySelector(".toc-menu");p||((p=document.createElement("div")).className="toc-menu");var v=document.createElement("h3");v.textContent=e.dataset.title||"Contents",p.appendChild(v),p.appendChild(m);e=!document.getElementById("toc")&&d.querySelector("h1.page ~ :not(.is-before-toc)");e&&((v=document.createElement("aside")).className="toc embedded",v.appendChild(p.cloneNode(!0)),e.parentNode.insertBefore(v,e)),window.addEventListener("load",function(){h(),window.addEventListener("scroll",h)})}}function h(){var t,e=window.pageYOffset,o=1.15*g(document.documentElement,"fontSize"),n=d.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight){l=Array.isArray(l)?l:Array(l||0);var i=[],r=u.length-1;return u.forEach(function(e,t){var o="#"+e.id;t===r||e.getBoundingClientRect().top+g(e,"paddingTop")>n?(i.push(o),l.indexOf(o)<0&&f[o].classList.add("is-active")):~l.indexOf(o)&&f[l.shift()].classList.remove("is-active")}),m.scrollTop=m.scrollHeight-m.offsetHeight,void(l=1<i.length?i:i[0])}Array.isArray(l)&&(l.forEach(function(e){f[e].classList.remove("is-active")}),l=void 0),u.some(function(e){return e.getBoundingClientRect().top+g(e,"paddingTop")-o>n||void(t="#"+e.id)}),t?t!==l&&(l&&f[l].classList.remove("is-active"),(e=f[t]).classList.add("is-active"),m.scrollHeight>m.offsetHeight&&(m.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-m.offsetHeight)),l=t):l&&(f[l].classList.remove("is-active"),l=void 0)}function g(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o,t;function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){if(e){if(e.altKey||e.ctrlKey)return;window.location.hash="#"+this.id,e.preventDefault()}window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}!document.documentMode||(o=document.querySelector("article.doc"),t=document.querySelector(".toolbar"),window.addEventListener("load",function e(t){var n,o;(n=i(window.location.hash))&&(o=document.getElementById(n))&&(c.bind(o)(),setTimeout(c.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=i(e.hash))&&(n=document.getElementById(t))&&e.addEventListener("click",c.bind(n))}))}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
!function(){"use strict";var t=document.querySelector(".navbar-burger");t&&t.addEventListener("click",function(t){t.stopPropagation(),document.documentElement.classList.toggle("is-clipped--navbar"),this.classList.toggle("is-active");var e=document.getElementById(this.dataset.target);e.classList.toggle("is-active")&&(e.style.maxHeight="",t=window.innerHeight-Math.round(e.getBoundingClientRect().top),parseInt(window.getComputedStyle(e).maxHeight,10)!==t&&(e.style.maxHeight=t+"px"))}.bind(t))}();
!function(){"use strict";var s=/^\$ (\S[^\\\n]*(\\\n(?!\$ )[^\\\n]*)*)(?=\n|$)/gm,l=/( ) *\\\n *|\\\n( ?) */g,d=/ +$/gm,r=(document.getElementById("site-script")||{dataset:{}}).dataset;[].slice.call(document.querySelectorAll(".doc pre.highlight, .doc .literalblock pre")).forEach(function(e){var t,n,c,a,i;if(e.classList.contains("highlight"))(c=(t=e.querySelector("code")).dataset.lang)&&"console"!==c&&((a=document.createElement("span")).className="source-lang",a.appendChild(document.createTextNode(c)));else{if(!e.innerText.startsWith("$ "))return;var o=e.parentNode.parentNode;o.classList.remove("literalblock"),o.classList.add("listingblock"),e.classList.add("highlight"),(t=document.createElement("code")).className="language-console hljs",t.dataset.lang="console",t.appendChild(e.firstChild),e.appendChild(t)}(c=document.createElement("div")).className="source-toolbox",a&&c.appendChild(a),window.navigator.clipboard&&((n=document.createElement("button")).className="copy-button",n.setAttribute("title","Copy to clipboard"),"svg"===r.svgAs?((o=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("class","copy-icon"),(a=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttribute("href",window.uiRootPath+"/img/octicons-16.svg#icon-clippy"),o.appendChild(a),n.appendChild(o)):((i=document.createElement("img")).src=window.uiRootPath+"/img/octicons-16.svg#view-clippy",i.alt="copy icon",i.className="copy-icon",n.appendChild(i)),(i=document.createElement("span")).className="copy-toast",i.appendChild(document.createTextNode("Copied!")),n.appendChild(i),c.appendChild(n)),e.appendChild(c),n&&n.addEventListener("click",function(e){var t=e.innerText.replace(d,"");"console"===e.dataset.lang&&t.startsWith("$ ")&&(t=function(e){var t,n=[];for(;t=s.exec(e);)n.push(t[1].replace(l,"$1$2"));return n.join(" && ")}(t));window.navigator.clipboard.writeText(t).then(function(){this.classList.add("clicked"),this.offsetHeight,this.classList.remove("clicked")}.bind(this),function(){})}.bind(n,t))})}();
!function(){"use strict";var a,i,c=(document.getElementById("site-script")||{dataset:{}}).dataset;function o(){var e,t,n,o;a||((a=document.createElement("div")).setAttribute("aria-modal","true"),a.className="modal",(e=document.createElement("a")).href="#",e.className="close",e.setAttribute("title","Close lightbox"),"svg"===c.svgAs?((t=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("class","copy-icon"),(n=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttribute("href",window.uiRootPath+"/img/octicons-16.svg#icon-x"),t.appendChild(n),e.appendChild(t)):((o=document.createElement("img")).src=window.uiRootPath+"/img/octicons-16.svg#view-x",o.alt="close icon",o.className="x-icon",e.appendChild(o)),a.appendChild(e),(i=document.createElement("div")).className="content",a.appendChild(i),(o=document.getElementsByTagName("body")[0]).appendChild(a),o.addEventListener("keydown",function(e){"Escape"===e.code&&a&&"block"===a.style.display&&l(e)}),i.addEventListener("click",l),e.addEventListener("click",function(e){l(e),e.preventDefault()}),e.addEventListener("keydown",function(e){"Space"!==e.code&&"Enter"!==e.code||(l(e),e.preventDefault())}))}function d(){a.style.display="block"}function l(e){a.style.display="none",i.firstChild.remove(),e.stopPropagation()}function r(e,t,n){t.offsetWidth/t.offsetHeight<n.offsetWidth/n.offsetHeight?e.style.height="70vh":e.style.width="70vw"}document.querySelectorAll(".imageblock img").forEach(function(n){"A"!==n.parentNode.nodeName&&(n.parentNode.className+=" lightbox","function"==typeof n.parentNode.classList.remove&&n.parentNode.addEventListener("mouseover",function(e){n.naturalWidth<=n.offsetWidth&&n.naturalHeight<=n.offsetHeight?n.parentNode.classList.remove("lightbox"):n.parentNode.classList.add("lightbox")}),n.addEventListener("click",function(e){var t;n.naturalWidth<=n.offsetWidth&&n.naturalHeight<=n.offsetHeight||(o(),(t=document.createElement("img")).src=e.currentTarget.src,t.alt=e.currentTarget.alt,r(t,n.parentNode,i.parentNode),i.appendChild(t),d())}))}),document.querySelectorAll(".imageblock object").forEach(function(n){"A"!==n.parentNode.nodeName&&(n.parentNode.className+=" lightbox",n.parentNode.addEventListener("click",function(e){o();var t=document.createElement("object");t.type=n.type,t.data=n.data,d(),r(t,n,i.parentNode),n.getSVGDocument()&&0===n.getSVGDocument().querySelectorAll("a").length&&(t.style.pointerEvents="none"),i.appendChild(t),e.preventDefault()}))}),document.querySelectorAll(".imageblock svg").forEach(function(n){"A"!==n.parentNode.nodeName&&(n.parentNode.className+=" lightbox",n.parentNode.addEventListener("click",function(e){o();var t=n.cloneNode(!0);d(),t.style.height="auto",t.style.width="auto",r(t,n.parentNode,i.parentNode),i.appendChild(t),e.preventDefault()}))})}();
!function(){"use strict";var l=window.location.hash;function o(t,a){return Array.prototype.slice.call((a||document).querySelectorAll(t))}o(".tabset").forEach(function(c){var n,r,t=c.querySelector(".tabs");t&&(o("li",t).forEach(function(t,a){var e,i,s=(t.querySelector("a[id]")||t).id;s&&(i=s,e=o(".tab-pane",c).find(function(t){return t.getAttribute("aria-labelledby")===i}),a||(r={tab:t,pane:e}),!n&&l==="#"+s&&(n=!0)?(t.classList.add("is-active"),e&&e.classList.add("is-active")):a||(t.classList.remove("is-active"),e&&e.classList.remove("is-active")),t.addEventListener("click",function(t){var a=this.tab,e=this.pane;o(".tabs li, .tab-pane",this.tabset).forEach(function(t){t===a||t===e?t.classList.add("is-active"):t.classList.remove("is-active")}),t.preventDefault()}.bind({tabset:c,tab:t,pane:e})))}),!n&&r&&(r.tab.classList.add("is-active"),r.pane&&r.pane.classList.add("is-active"))),c.classList.remove("is-loading")})}();
!function(){"use strict";var e=document.querySelectorAll("[data-open]"),t=document.querySelectorAll("[data-close]");const n="is-visible",o=window.uiRootPath,c=o.replace("_",""),s=c+"home/modal-links/";for(const i of e)i.addEventListener("click",function(){var e=this.dataset.open;!async function(e){return await fetch(e)}(s).then(e=>e.text()).then(e=>{e=e.replace(/..\/..\//g,c);document.getElementById("modal-links").innerHTML=e}),document.getElementById(e).classList.add(n)});for(const l of t)l.addEventListener("click",function(){this.parentElement.parentElement.parentElement.classList.remove(n)});document.addEventListener("click",e=>{e.target===document.querySelector(".modal-docs.is-visible")&&document.querySelector(".modal-docs.is-visible").classList.remove(n)}),document.addEventListener("keyup",e=>{"Escape"===e.key&&document.querySelector(".modal-docs.is-visible")&&document.querySelector(".modal-docs.is-visible").classList.remove(n)})}();
!function(){"use strict";var e=document.querySelector(".swagger-ui-url p a");if(e){const a=e.href;window.onload=function(){var e=SwaggerUIBundle({url:a,dom_id:"#swagger-ui",deepLinking:!0,presets:[SwaggerUIBundle.presets.apis,SwaggerUIStandalonePreset],plugins:[SwaggerUIBundle.plugins.DownloadUrl],layout:"BaseLayout",tagsSorter:"alpha",operationsSorter:"alpha",docExpansion:"none"});window.ui=e}}}();
!function(){"use strict";const n=document.querySelector("footer").offsetHeight+10;!function(){const t=document.createElement("button");t.setAttribute("id","scroll-to-top-btn"),t.style.bottom=n+"px",document.body.appendChild(t);window.addEventListener("scroll",function(){window.scrollY>window.innerHeight?t.classList.add("show"):t.classList.remove("show")});function o(){0!==window.scrollY&&setTimeout(function(){window.scrollTo(0,window.scrollY-100),o()},1)}t.addEventListener("click",o)}()}();
!function(){"use strict";var e=document.querySelector(".md-path p a");e&&!async function(e){return await fetch(e)}(e.href).then(e=>e.text()).then(e=>{document.getElementById("markdown").innerHTML=marked.parse(e)})}();
!function(){"use strict";if(document.querySelector(".nav-container")){var e=document.querySelector(".print-path p a"),t=document.querySelector(".nav-item.is-current-page.is-active").dataset.depth,a=document.querySelector('.nav-item.is-active.is-current-path[data-depth="1"] a');const c=document.querySelector("article.doc");if(!e&&1<t){e=a.href;const r=new URL(e);r.search="",r.hash="";e=r.toString(),t=localStorage.getItem(e);t&&((a=document.createElement("div")).className="print-path",c.appendChild(a),(e=document.createElement("a")).className="xref page",e.setAttribute("href",t),t=document.createElement("p"),a.appendChild(t),t.appendChild(e))}}}();
!function(){"use strict";if(document.querySelector(".nav-container")){var e=document.querySelector(".print-path p a"),t=document.querySelector(".nav-item.is-current-page.is-active a"),n=document.querySelector(".nav-item.is-current-page.is-active").dataset.depth;if(e){const i=document.querySelector(".print-pdf"),o=document.querySelector(".print-pdf a");var r=document.createElement("iframe");r.setAttribute("name","print"),document.body.appendChild(r);t=t.href;"1"!==n||localStorage.getItem(t)||localStorage.setItem(t,e.href),i.classList.add("is-visible"),o.href=e.href;var a=document.createElement("div");a.className="loader",document.querySelector("article.doc").appendChild(a),i.addEventListener("click",function(e){a.style.display="grid",e.stopPropagation()}),window.onmessage=function(e){e.origin===window.location.origin&&"document generated"===e.data&&(a.style.display="none")}}}}();