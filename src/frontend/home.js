const root = document.getElementById('root');

const header = `
<header class="main-header">
  <nav class="main-nav">
    <ul class="nav-links">
      <li class="menu-item"><a href="#" id="logo" class="nav-logo">PokeWeb</a></li>
      <li class="menu-item"><a href="#" id="pokemons" class="nav-pokemons">Pokemon</a></li>
    </ul>    
  </nav>
</header>
`;

const main = `
<main></main>
`;

const footer = `
<footer id='main-footer'>
  <p id='copyright'>Created by Microverse under CC License</p>
</footer>
`;

const renderHome = () => {
  root.insertAdjacentHTML('beforeend', header);
  root.insertAdjacentHTML('beforeend', main);
  root.insertAdjacentHTML('beforeend', footer);
};

export default renderHome;