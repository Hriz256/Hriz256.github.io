!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ResizeSensor=t()}(this,function(){var w=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)};function o(e,t){var i=Object.prototype.toString.call(e),n="[object Array]"===i||"[object NodeList]"===i||"[object HTMLCollection]"===i||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,o=0,s=e.length;if(n)for(;o<s;o++)t(e[o]);else t(e)}var s=function(t,i){function m(){var i,n,o=[];this.add=function(e){o.push(e)},this.call=function(){for(i=0,n=o.length;i<n;i++)o[i].call()},this.remove=function(e){var t=[];for(i=0,n=o.length;i<n;i++)o[i]!==e&&t.push(o[i]);o=t},this.length=function(){return o.length}}function n(e,t){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(t)}else e.resizedAttached=new m,e.resizedAttached.add(t);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var i,n,o="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",s="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=o,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+o+'"><div style="'+s+'"></div></div><div class="resize-sensor-shrink" style="'+o+'"><div style="'+s+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),"static"==(n="position",(i=e).currentStyle?i.currentStyle[n]:window.getComputedStyle?window.getComputedStyle(i,null).getPropertyValue(n):i.style[n])&&(e.style.position="relative");var r=e.resizeSensor.childNodes[0],d=r.childNodes[0],c=e.resizeSensor.childNodes[1],l=function(){d.style.width=1e5+"px",d.style.height=1e5+"px",r.scrollLeft=1e5,r.scrollTop=1e5,c.scrollLeft=1e5,c.scrollTop=1e5};l();var a,f,h,u,v=!1,z=function(){e.resizedAttached&&(v&&(e.resizedAttached.call(),v=!1),w(z))};w(z);var p=function(){(h=e.offsetWidth)==a&&(u=e.offsetHeight)==f||(v=!0,a=h,f=u),l()},y=function(e,t,i){e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i)};y(r,"scroll",p),y(c,"scroll",p)}o(t,function(e){n(e,i)}),this.detach=function(e){s.detach(t,e)}};return s.detach=function(e,t){o(e,function(e){e.resizedAttached&&"function"==typeof t&&(e.resizedAttached.remove(t),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)})},s});