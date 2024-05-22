// Create the HTML document
const html = document.implementation.createHTMLDocument();

// Create the head element
const head = html.createElement('head');
html.appendChild(head);

// Create the meta charset element
const metaCharset = html.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

// Create the meta viewport element
const metaViewport = html.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(metaViewport);

// Create the title element
const title = html.createElement('title');
title.textContent = 'Gillian\'s Art Gallery';
head.appendChild(title);

// Create the link element for the stylesheet
const link = html.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'style.css');
head.appendChild(link);

// Create the body element
const body = html.createElement('body');
html.appendChild(body);

// Create the header element
const header = html.createElement('header');
header.classList.add('main');
body.appendChild(header);

// Create the nav element
const nav = html.createElement('nav');
nav.classList.add('navbar');
header.appendChild(nav);

// Create the h1 element for the logo
const logo = html.createElement('h1');
logo.classList.add('logo');
logo.textContent = 'GillianIzCool';
nav.appendChild(logo);

// Create the menu element
const menu = html.createElement('menu');
menu.classList.add('menu');
header.appendChild(menu);

// Create the ul element for the menu
const ul = html.createElement('ul');
menu.appendChild(ul);

// Create the li elements for the menu items
const menuItems = ['HOME', 'ABOUT ME', 'ICONIC ARTWORKS', 'BONUS SKETCHES', 'SILHOUETTE ARTWORKS / MINIMAL', 'CONTACTS'];
menuItems.forEach((item) => {
  const li = html.createElement('li');
  const a = html.createElement('a');
  a.setAttribute('href', `#${item.replace(' ', '-').toLowerCase()}`);
  a.textContent = item;
  li.appendChild(a);
  ul.appendChild(li);
});

// Create the main element
const main = html.createElement('main');
body.appendChild(main);

// Create the section elements for each section
const sections = [
  { id: 'HOME', title: 'Hi, Gillian Here.', content: 'Welcome to my art gallery and my personal website for art-related basis.' },
  { id: 'ABOUT-ME', title: 'ABOUT ME', content: 'As a student, I also worked as a professional artist. I started drawing at a very young age to pursue my passion for making different projects through art as I allow myself. So here is my interactive website of my artworks in this portfolio website.' },
  { id: 'ICONIC-ARTWORKS', title: 'ICONIC ARTWORKS', content: '' },
  { id: 'BONUS-SKETCHES', title: 'BONUS SKETCHES', content: 'Basically, the bonus sketches are more on manual drawings. They\'re focused more on ink sketches of any character\'s drawings.' },
  { id: 'SILHOUETTE-ARTWORKS', title: 'SILHOUETTE ARTWORKS / MINIMAL', content: 'Here are the artworks that is way minimal and way simple.' },
  { id: 'CONTACTS', title: 'CONTACTS', content: 'Here are my art accounts where i posted them' }
];

sections.forEach((section)) 
  const div = html.createElement('div');
  div.id = section.id;
  div.classList.add('section');
  main.appendChild(div);
  

  const h2 = html.createElement('h2');
  h2.textContent = section.title;