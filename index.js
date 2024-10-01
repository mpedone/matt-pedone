const linksText = document.querySelector(".links-text");
const linksTag = document.querySelector("#links-tag");

linksTag.addEventListener('click', () => linksText.innerHTML = 
'<object width="100%" type="text/html" data="links.html"</object>')

