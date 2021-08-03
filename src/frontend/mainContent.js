import commentsPopUp from './comments';

const heartSwitch = (likesheart) => {
  if (likesheart.getAttribute('like') === 'off') {
    likesheart.classList.remove('far');
    likesheart.classList.add('fas');
  } else if (likesheart.getAttribute('like') === 'on') {
    likesheart.classList.remove('fas');
    likesheart.classList.add('far');
  }
};

const createCard = (object) => {
  const article = document.createElement('article');
  article.id = `tv-${object.show.id}`;
  article.classList.add('tv-show');

  const picture = document.createElement('div');
  picture.classList.add('tv-pic');
  const pictureURL = object.show.image?.original;
  picture.style.backgroundImage = `url(${pictureURL})`;

  const buttons = document.createElement('div');
  buttons.classList.add('tv-buttons');

  const title = document.createElement('h3');
  title.classList.add('tv-title');
  title.textContent = object.show.name;

  const likes = document.createElement('div');
  likes.classList.add('tv-likes');

  const likescount = document.createElement('p');
  likescount.classList.add('tv-likescount');
  likescount.innerText = '0'; // TODO: Set from API

  const likesheart = document.createElement('i');
  likesheart.setAttribute('like', 'on'); // TODO: Set from API
  heartSwitch(likesheart);
  likesheart.classList.add('fa-heart');
  likesheart.addEventListener('click', () => {
    heartSwitch(likesheart);
    likesheart.setAttribute('like',
      likesheart.getAttribute('like') === 'off' ? 'on' : 'off');
  });
  likes.appendChild(likescount);
  likes.appendChild(likesheart);

  const detailsbtn = document.createElement('button');
  detailsbtn.classList.add('tv-detailsbtn');
  detailsbtn.innerText = 'Details';
  detailsbtn.addEventListener('click', commentsPopUp(object));

  buttons.appendChild(title);
  buttons.appendChild(likes);
  buttons.appendChild(detailsbtn);

  article.appendChild(picture);
  article.appendChild(buttons);
  return article;
};

const loadTvCards = (objects) => {
  const main = document.getElementsByTagName('main')[0];

  objects.forEach((object) => main.appendChild(createCard(object)));
};

export default loadTvCards;