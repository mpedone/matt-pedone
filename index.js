const linksText = document.querySelector(".links-text");
const linksTag = document.querySelector("#links-tag");

const bodyText = document.querySelector(".article");
const aboutLink = document.querySelector("#about-link");


aboutLink.addEventListener('click', () => {
    bodyText.innerHTML = 
'<object width="100%" type="text/html" data="about.html"</object>'
})

linksTag.addEventListener('click', () => {
    bodyText.innerHTML = 
'<object width="100%" type="text/html" data="links.html"</object>'
})

