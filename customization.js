document.addEventListener('DOMContentLoaded', function () {
  // Create and append head elements
  const head = document.head;

  const metaCharset = document.createElement('meta');
  metaCharset.setAttribute('charset', 'UTF-8');
  head.appendChild(metaCharset);

  const metaViewport = document.createElement('meta');
  metaViewport.setAttribute('name', 'viewport');
  metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
  head.appendChild(metaViewport);

  const title = document.createElement('title');
  title.textContent = "Gillian's Art Gallery";
  head.appendChild(title);

  const linkStylesheet = document.createElement('link');
  linkStylesheet.setAttribute('rel', 'stylesheet');
  linkStylesheet.setAttribute('href', 'style.css');
  head.appendChild(linkStylesheet);

  const scriptCustomization = document.createElement('script');
  scriptCustomization.setAttribute('src', 'customization.js');
  head.appendChild(scriptCustomization);

  const scriptAnimations = document.createElement('script');
  scriptAnimations.setAttribute('src', 'animations.js');
  head.appendChild(scriptAnimations);

  // Create and append body elements
  const body = document.body;

  const header = document.createElement('header');
  header.classList.add('main');
  body.appendChild(header);

  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  header.appendChild(nav);

  const h1Logo = document.createElement('h1');
  h1Logo.classList.add('logo');
  h1Logo.textContent = 'GillianIzCool';
  nav.appendChild(h1Logo);

  const menu = document.createElement('menu');
  menu.classList.add('menu');
  header.appendChild(menu);

  const ulMenu = document.createElement('ul');
  menu.appendChild(ulMenu);

  const menuItems = [
      { href: '#HOME', text: 'HOME' },
      { href: '#ABOUT-ME', text: 'ABOUT ME' },
      { href: '#PORTFOLIO SECTIONS', text: 'PORTFOLIO SECTIONS' },
      { href: '#SKILLS', text: 'SKILLS' },
      { href: '#CONTACTS', text: 'CONTACTS' }
  ];

  menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', item.href);
      a.innerHTML = `<b>${item.text}</b>`;
      li.appendChild(a);
      ulMenu.appendChild(li);
  });

  const main = document.createElement('main');
  body.appendChild(main);

  const sections = [
      {
          id: 'HOME', className: 'section', title: 'Hi, Gillian Here.', content: `
              <div class="first">
                  <h3 class="introduction">Welcome to my art gallery and my personal website for art-related basis.</h3>
              </div>
              <div class="profile">
                  <img src="justmyself.jpg" width="300" height="350" class="images" alt="Gillian's Profile Picture"/>
              </div>
          `
      },
      {
          id: 'ABOUT-ME', className: 'section', title: 'ABOUT ME', content: `
              <p class="description">
                  My name is Gillian, just living a normal life and welcome to my art gallery.
                  As a student, I worked as a professional artist. 
                  I started drawing at a very young age to pursue my passion for making different projects through art as I allow myself. 
                  So here is my interactive website of my artworks in this portfolio website.
              </p>
              <p class="paragraph2">
                  I started my art career ever since a very young age. Back then, it got my attention since I had a full interest in making 
                  artworks as my hobby. Whenever I watched a random show or a series that I was interested in, I wanted to make an artwork out of it. 
                  It gave me much interest to create them. In the end, it became my hobby and inspired me well.
              </p>
              <p class="paragraph3">
                  Currently, I started to post my drawings on Instagram in my free time. However, I had to stop due to projects and assessments 
                  which made it complicated and too busy to make artworks. Since I planned to make this portfolio website, here are my iconic artworks that will get everyone's attention.
              </p>
          `
      },
      {
          id: 'PORTFOLIO SECTIONS', className: 'section', title: 'ICONIC ARTWORKS', content: `
              <div class="first gallery">
                  <img src="mando.png" alt="Mandalorian" width="200" height="200" class="images"/>
                  <img src="Game of thrones.png" alt="Game of Thrones" width="200" height="200" class="images"/>
                  <img src="erwin.png" alt="Erwin Smith" width="200" height="200" class="images"/>
                  <p class="intro">
                      Here are the digital sketches which are very iconic in my art gallery. The software I am using for these artworks is Autodesk 
                      Sketchbook. It got anyone's attention after I created them. The first artwork is from the Star Wars series which is the Mandalorian. 
                      The second artwork is from Game of Thrones which is an original character of mine. The third artwork is of Erwin Smith and his younger self from the Attack on Titan series.
                  </p>
                  <img src="duel.png" alt="Alucard vs Diluc" width="650" height="500" class="images"/> 
                  <p class="duel">
                      An artwork that got anyone's attention, this mini comic I made depicts a battle between two universes: Alucard against Diluc Ragnivndr.
                  </p>
                  <div class="sketch">
                      <img src="Scorpion.png" alt="Scorpion" width="200" height="250" class="images"/>
                      <img src="Suvzero.jpg" alt="Sub-Zero" width="200" height="250" class="images"/>
                      <img src="wriothesley.png" alt="Wriothesley" width="200" height="250" class="images"/>
                      <img src="giyuu2.jpg" alt="Giyuu" width="200" height="250" class="images"/> 
                      <img src="ichigo.png" alt="Ichigo" width="200" height="250" class="images"/>
                      <img src="sanji.png" alt="Sanji" width="200" height="250" class="images"/>
                      <p class="sketchbook">
                          Here are the bonus sketches, basically called the inky artworks. These sketches have been drawn over months and some are from last year.
                      </p>
                  </div>
                  <h1 class="shadow">Silhouette Artworks</h1>
                  <div class="SILHOUETTE">
                      <img src="swordsman.png" alt="Swordsman" width="200" height="250" class="images"/>
                      <img src="Jonsnow.png" alt="Jon Snow" width="200" height="250" class="images"/>
                      <img src="Screenshot 2024-05-13 182104.png" alt="Moon Venus" width="200" height="250" class="images"/>
                      <p class="shadowintro">
                          Here are the minimal artworks, they're all in shadows, no faces and not much design, just the figures of their bodies 
                          and the background colors.
                      </p>
                  </div>
              </div>
          `
      },
      {
          id: 'SKILLS', className: 'section', title: 'Skills', content: `
              <p class="skills">
                  Besides sketching, I also have skills in photo editing with art. I used to take pictures in random places, even at home, and customize them.
              </p>
          `
      },
      {
          id: 'CONTACTS', className: 'section', title: 'Instagram Accounts', content: `
              <p class="Contacts2">Here are my art accounts where I post my work:</p>
              <ul>
                  <li>@cosm_ink00 - Gillian's Inky Works</li>
                  <li>@dwnscrpnx - GM Draws</li>
                  <li>@silentwolf_art05 - Gillian's Sketchbook</li>
              </ul>
          `
      }
  ];

  sections.forEach(sectionData => {
      const section = document.createElement('section');
      section.id = sectionData.id;
      section.className = sectionData.className;

      const h2 = document.createElement('h2');
      h2.className = sectionData.id === 'HOME' ? 'title' : sectionData.id === 'ABOUT-ME' ? 'about-me' : 'section-title';
      h2.textContent = sectionData.title;
      section.appendChild(h2);

      section.insertAdjacentHTML('beforeend', sectionData.content);
      main.appendChild(section);
  });
});
