function copyToClipboard(e){var t=document.activeElement,n=createFakeInput(),o="#"+e.getAttribute("data-color");n.value=o,n.focus(),n.setSelectionRange(0,n.value.length);var l;try{l=document.execCommand("copy"),n.blur()}catch(e){l=!1}return t&&"function"==typeof t.focus&&t.focus(),clearEl(n),notify(l),l}function createFakeInput(){var e=document.createElement("textarea");return e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="fixed",e.style.right="-9999px",e.setAttribute("readonly",""),document.body.appendChild(e),e}function notify(e){var t=1500,n=document.getElementById("js-notify-container");null===n&&(n=document.createElement("div"),n.id="js-notify-container",n.className="flash-container",document.body.appendChild(n));var o=document.createElement("div");o.className="js-notify flash",e===!0?(o.innerHTML="Color copied! \u270c\ufe0f",o.className+=" flash--success"):(o.innerHTML="We couldn't copy the color! \ud83d\ude15",o.className+=" flash--error"),n.prepend(o),setTimeout(function(){clearEl(o),""===n.innerHTML&&clearEl(n)},t)}function clearEl(e){e.parentNode.removeChild(e)}for(var colorEls=document.querySelectorAll("[data-color]"),i=0;i<colorEls.length;i++)colorCode=colorEls[i].getAttribute("data-color-picker"),colorEls[i].addEventListener("click",function(){copyToClipboard(this)});HTMLElement="undefiend"!=typeof HTMLElement?HTMLElement:Element,HTMLElement.prototype.prepend=function(e){return this.firstChild?this.insertBefore(e,this.firstChild):this.appendChild(e)};