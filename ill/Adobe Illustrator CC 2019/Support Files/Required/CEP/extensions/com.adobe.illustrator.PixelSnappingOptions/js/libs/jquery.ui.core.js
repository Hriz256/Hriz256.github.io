!function(u){function r(e,t){var n,r,a,i=e.nodeName.toLowerCase();return"area"===i?(r=(n=e.parentNode).name,!(!e.href||!r||"map"!==n.nodeName.toLowerCase())&&(!!(a=u("img[usemap='#"+r+"']")[0])&&o(a))):(/^(input|select|textarea|button|object)$/.test(i)?!e.disabled:"a"===i&&e.href||t)&&o(e)}function o(e){return u.expr.filters.visible(e)&&!u(e).parents().addBack().filter(function(){return"hidden"===u.css(this,"visibility")}).length}u.extend(u.expr[":"],{data:u.expr.createPseudo?u.expr.createPseudo(function(t){return function(e){return!!u.data(e,t)}}):function(e,t,n){return!!u.data(e,n[3])},focusable:function(e){return r(e,!isNaN(u.attr(e,"tabindex")))},tabbable:function(e){var t=u.attr(e,"tabindex"),n=isNaN(t);return(n||0<=t)&&r(e,!n)}})}(jQuery);