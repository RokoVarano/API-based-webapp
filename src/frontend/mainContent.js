/* eslint-disable prefer-destructuring */
import commentsPopUp from './comments';
import Likes from '../backend/likesAPI';

const loadCounter = (number) => {
  const display = document.createElement('h3');
  display.id = 'tv-counter';
  display.textContent = `Shows: ${number}`;

  return display;
};

const createCard = (object, likeAPI) => {
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
  likescount.innerText = object.likes; // TODO: Set from API
  const likesheart = document.createElement('i');
  likesheart.classList.add('fas', 'fa-heart');
  likesheart.addEventListener('click', () => {
    if (likesheart.getAttribute('loading') === 'on') return;

    likesheart.setAttribute('loading', 'on');
    likesheart.style.opacity = 0.5;
    Promise.resolve(likeAPI.post(object.show.id))
      .then(() => likeAPI.get())
      .then((result) => {
        const objlikes = result.filter((item) => item.item_id === object.show.id)[0];
        object.likes = objlikes === undefined ? 0 : objlikes.likes;
        likescount.innerText = object.likes;
        likesheart.style.opacity = 1;
        likesheart.setAttribute('loading', 'off');
      });
  });

  likes.appendChild(likescount);
  likes.appendChild(likesheart);

  const detailsbtn = document.createElement('button');
  detailsbtn.classList.add('tv-detailsbtn');
  detailsbtn.innerText = 'Details';
  detailsbtn.addEventListener('click', () => commentsPopUp(object));

  buttons.appendChild(title);
  buttons.appendChild(likes);
  buttons.appendChild(detailsbtn);

  article.appendChild(picture);
  article.appendChild(buttons);
  return article;
};

const loadTvCards = (objects) => {
  const main = document.getElementsByTagName('main')[0];
  main.appendChild(loadCounter(objects.length));
  const likeAPI = new Likes();
  likeAPI.createApp()
    .then(() => likeAPI.post('chicken'))
    .then(() => likeAPI.get())
    .then(
      (result) => {
        objects.forEach((object) => {
          const objlikes = result.filter((item) => item.item_id === object.show.id)[0];
          object.likes = objlikes === undefined ? 0 : objlikes.likes;
          main.appendChild(createCard(object, likeAPI));
        });
      },
    );
};

export { loadTvCards, loadCounter };

/* eslint-disable prefer-destructuring */
