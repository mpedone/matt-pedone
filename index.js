const linksText = document.querySelector(".links-text");
const linksTag = document.querySelector("#links-tag");

const bodyText = document.querySelector(".body-text");
const aboutLink = document.querySelector("#about-link");


// aboutLink.addEventListener('click', () => {
//     bodyText.innerHTML = 
// '<object width="100%" type="text/html" data="about.html"</object>'
// })

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    bodyText.innerHTML = myText;
}

// let file = "about.html"
aboutLink.addEventListener('click', getText("about.html"))

linksTag.addEventListener('click', () => {
    bodyText.innerHTML = 
'<object width="100%" type="text/html" data="links.html"</object>'
})

