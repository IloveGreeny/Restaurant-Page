(()=>{"use strict";function e(e,t){const n=document.createElement("button");return n.setAttribute("id",e),n.innerHTML=t,n}function t(e,t,n,o){const c=document.createElement("div");c.classList.add("container");const d=document.createElement("img");d.setAttribute("src",e),d.setAttribute("alt",t);const a=document.createElement("div");a.classList.add("description");const i=document.createElement("div");i.innerHTML=n;const r=document.createElement("div");return r.innerHTML=o,a.appendChild(i),a.appendChild(r),c.appendChild(d),c.appendChild(a),c}const n=function(){const e=document.getElementById("tab-content");e.classList.add("flex"),e.textContent="",[t("https://www.theworlds50best.com/discovery/filestore/jpg/Pages-Paris-France-02.jpg","weird fish","Weird Fish","Overpriced"),t("https://www.discoverwalks.com/blog/wp-content/uploads/2019/04/jesson-mata-1137291-unsplash-816x544.jpg","I have no idea what this is","This may be the best thing you eat or the last thing you eat","Wayyyyy too overpriced")].forEach((t=>{e.append(t)}))},o=function(){const e=document.getElementById("tab-content");e.classList.add("flex"),e.innerHTML="";const t=function(){const e=document.createElement("div"),t=document.createElement("h2");t.textContent="ABOUT",e.appendChild(t);const n=document.createElement("p");return n.innerHTML="Want some overpriced food stuffed down your\n    throat by a bunch of overpolite waiters? Want to show your date \n    how rich you really are? Dope Stuff is the place for you! \n    Our prices are bad for your heart as well as your wallet. ",e.appendChild(n),e}();e.appendChild(t)};(function(){console.log("called loadPage");const t=document.getElementById("content"),n=function(e,t){const n=document.createElement("header");n.setAttribute("id","header");const o=document.createElement("h1");return o.innerHTML="DOPE STUFF",n.appendChild(o),n}();t.appendChild(n);const o=function(t){const n=document.createElement("nav");n.setAttribute("id","navi");const o=e("home","Home"),c=e("menu","Menu");return n.appendChild(o),n.appendChild(c),n}();t.appendChild(o);const c=function(e){const t=document.createElement("main");return t.setAttribute("id","tab-content"),t}();t.appendChild(c)})(),o(),function(){const e=document.getElementById("home"),t=document.getElementById("menu");e.addEventListener("click",o),t.addEventListener("click",n)}()})();