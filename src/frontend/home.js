import { loadTvCards } from './mainContent';
import tvAPI from '../backend/tvAPI';

const root = document.getElementById('root');

const header = `
<header class="main-header">
  <nav class="main-nav">
    <ul class="nav-links">
      <li class="menu-item"><a href="#" id="logo" class="nav-logo">TvWEB</a></li>
      <li class="menu-item"><a href="#" id="pokemons" class="nav-pokemons">Shows</a></li>
    </ul>    
  </nav>
  <div class='silver-bar'/>
</header>
`;

const main = `
<main></main>
`;

const footer = `
<footer id='main-footer'>
  <div class='silver-bar'/>
  <p id='copyright'>Created by Microverse under CC License</p>
</footer>
`;

const renderHome = () => {
  root.insertAdjacentHTML('beforeend', header);
  root.insertAdjacentHTML('beforeend', main);
  root.insertAdjacentHTML('beforeend', footer);

  tvAPI.get().then((content) => loadTvCards(content));
};

export default renderHome;