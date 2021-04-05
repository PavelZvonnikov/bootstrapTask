import { data } from './data.js';

const { menu, content: {articles}, dopMenu, cards, footer } = data;

const createMenu = (menuData) => {
  const menuList = document.createElement('ul');
  menuList.classList.add('navbar-nav');

  menuData.items.forEach(({title, src}) => {
    const menuItem = document.createElement('li');
    menuItem.classList.add('nav-item');
    menuItem.innerHTML = `<a class='nav-link menu__nav-item' src=${src}>${title}</a>`;
    menuList.append(menuItem);
  });

  return menuList;
}

const createHeader = () => {
  const headerMenu = document.querySelector('.header__menu');

  const navContainer = document.createElement('nav');
  navContainer.classList.add('navbar', 'navbar-expand-sm', 'navbar-light');

  navContainer.innerHTML = `
    <a class="navbar-brand" href="#">
      <img src='/img/${menu.imgLogo}' />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
  `;

  const menuList = createMenu(menu);

  navContainer.lastElementChild.append(menuList);
  headerMenu.append(navContainer);
}

const createContent = () => {
  const [ contentData ] = articles;

  const content = document.querySelector('#content');

  const header = document.createElement('h1');
  header.innerHTML = `${contentData.title}`

  content.append(header);
  content.insertAdjacentHTML('beforeend', contentData.content);
}

const createSideMenu = () => {
  const sideMenu = document.querySelector('#dopMenu');
  const table = document.createElement('table');

  table.classList.add('table', 'table-sm', 'table-bordered', 'my-rounded');
  table.innerHTML = '<tbody></tbody>';

  dopMenu.forEach(({title, src}) => {
    const row = document.createElement('tr');

    row.innerHTML = `<td><a class='nav-item nav-link nav-link__custom' href=${src}>${title}</a></td>`;
    table.firstChild.append(row);
  });

  sideMenu.append(table);
}

const createCardItem = ({title, img, text, buttonLink}) => {
  const col = document.createElement('div');
  col.classList.add('col-sm');

  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img class='card-img-top' src='img/${img}' alt='' />
    <div class="card-body">
      <h4 class='card-title'>${title}</h4>
      <p class='card-text'>${text}</p>
      <a class='btn btn-primary btn-sm' href=${buttonLink} role='button'>Go somewhere</a>
    </div>
  `;
  col.append(card);

  return col;
}

const createCards = () => {
  const cardsContainer = document.querySelector('#cards');

  const cardList = [];

  cards.forEach(card => {
    const cardItem = createCardItem(card);
    cardList.push(cardItem);
  });

  cardsContainer.append(...cardList);
}

const createFooter = () => {
  const footerContainer = document.querySelector('#footer');

  footerContainer.innerHTML = `
    <div class='row centered'>
      <p>${footer.text}</p>
    </div>
  `;
}

const createPage = () => {
  createHeader();
  createContent();
  createSideMenu();
  createCards();
  createFooter();
}

createPage();