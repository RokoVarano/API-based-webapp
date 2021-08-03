import mockAPI from '../backend/mockAPI';

const commentsPopUp = () => {
  const containerBackdrop = document.createElement('div');
  containerBackdrop.className = 'backdrop';
  containerBackdrop.addEventListener('click', (e) => {
    if (e.target.className === 'backdrop') {
      containerBackdrop.remove();
    }
  });

  const commentsSection = document.createElement('section');
  commentsSection.className = 'comments-section';

  const popUpImage = document.createElement('img');
  popUpImage.className = 'show-image';
  popUpImage.src = mockAPI[0].show.image.medium;

  const popUpTitle = document.createElement('h2');
  popUpTitle.className = 'popup-title';
  popUpTitle.textContent = mockAPI[0].show.name;

  const popUpSupportContent = document.createElement('div');
  popUpSupportContent.className = 'popup-support-content';

  const popUpSupportType = document.createElement('h3');
  popUpSupportType.className = 'popup-support-text'
  popUpSupportType.textContent = `Show Type: ${mockAPI[0].show.type}`;

  const popUpSupportGenre = document.createElement('h3');
  popUpSupportGenre.className = 'popup-support-text';
  popUpSupportGenre.textContent = `Genre: ${mockAPI[0].show.genres[0]}`;

  document.body.appendChild(containerBackdrop);
  containerBackdrop.appendChild(commentsSection);
  commentsSection.appendChild(popUpImage);
  commentsSection.appendChild(popUpTitle);
  commentsSection.appendChild(popUpSupportContent);
  popUpSupportContent.appendChild(popUpSupportType);
  popUpSupportContent.appendChild(popUpSupportGenre);
};

export default commentsPopUp;