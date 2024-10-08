const navList = document.querySelector('.nav');
const img = document.querySelector(".nav img");
let list = document.createElement('ul');
list.classList.add('menus');

let listItem1 = document.createElement('li');
listItem1.id = "index";
listItem1.innerHTML = '<a href="./index.html">I.&nbsp;&nbsp;&nbsp;About Me</a>';

let listItem2 = document.createElement('li');
listItem2.id = "links";
listItem2.innerHTML = '<a href="./links.html">II.&nbsp;&nbsp;Projects</a>';

let listItem3 = document.createElement('li');
listItem3.id = "contact";
listItem3.innerHTML = '<a href="./contact.html">III.&nbsp;Contact</a>';

let listItem4 = document.createElement('li');
listItem4.id = "blog";
listItem4.innerHTML = '<a href="./blog.html">IV.&nbsp;&nbsp;Blog</a>';

let listItem5 = document.createElement('li');
listItem5.id = "pageinfo";
listItem5.innerHTML = '<a href="./pageinfo.html">V.&nbsp;&nbsp;&nbsp;Page Info</a>';

navList.insertBefore(list, img);
list.append(listItem1);
list.append(listItem2);
list.append(listItem3);
list.append(listItem4);
list.append(listItem5);

const page = document.URL;
let pageID = '#' + 
        page.slice(page.lastIndexOf('/')+1,page.lastIndexOf('.'));
const currentPage = document.querySelector(pageID);
currentPage.classList.toggle("highlight");