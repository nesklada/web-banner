!function(){"use strict";(function(){function A(A){document.documentElement.classList.add(A)}var e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=",e.onload=function(){A("avif")},e.onerror=function(){var e,t;e=function(e){A(e?"webp":"jpng")},(t=new Image).onload=function(){var A=t.width>0&&t.height>0;e(A)},t.onerror=function(){e(!1)},t.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="}})(),function(){var A=document.querySelectorAll(".js_slideToggler"),e=document.querySelectorAll(".js_slide"),t=0;function n(A){A.preventDefault(),A.stopPropagation();var n=this;n.setAttribute("disabled",!0);var a=n.getAttribute("data-dir"),i=e[t];"next"===a?t++:t--,t>=e.length&&(t=0),t<0&&(t=e.length-1);var o=e[t];e.forEach((function(A){return A.classList.remove("animHide-next","animShow-next","animShow-prev","animHide-prev")})),i.classList.add("animHide-"+a),o.classList.add("animShow-"+a),setTimeout((function(){n.removeAttribute("disabled")}),500)}A.forEach((function(A){A.addEventListener("click",n)}))}(),document.body.addEventListener("click",(function(){window.open("https://www.google.com/search?q=Main banner")})),setTimeout((function(){document.querySelector("[data-anim-immediately]").removeAttribute("data-anim-immediately")}),500)}();