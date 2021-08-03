const commentsPopUp = (object) => {
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
  popUpImage.className = 'popup-image';
  popUpImage.src = object.show.image.medium;

  const popUpTitle = document.createElement('h2');
  popUpTitle.className = 'popup-title';
  popUpTitle.textContent = object.show.name;

  const popUpSupportContent = document.createElement('div');
  popUpSupportContent.className = 'popup-support-content';

  const popUpSupportType = document.createElement('h3');
  popUpSupportType.className = 'popup-support-text';
  popUpSupportType.textContent = `Show Type: ${object.show.type}`;

  const popUpSupportGenre = document.createElement('h3');
  popUpSupportGenre.className = 'popup-support-text';
  popUpSupportGenre.textContent = `Genre: ${object.show.genres[0]}`;

  const popUpSupportLang = document.createElement('h3');
  popUpSupportLang.className = 'popup-support-text';
  popUpSupportLang.textContent = `Language: ${object.show.language}`;

  const popUpSupportNetwork = document.createElement('h3');
  popUpSupportNetwork.className = 'popup-support-text';
  popUpSupportNetwork.innerHTML = `Network: ${object.show.network.name}`;

  document.body.appendChild(containerBackdrop);
  containerBackdrop.appendChild(commentsSection);
  commentsSection.appendChild(popUpImage);
  commentsSection.appendChild(popUpTitle);
  commentsSection.appendChild(popUpSupportContent);
  popUpSupportContent.appendChild(popUpSupportType);
  popUpSupportContent.appendChild(popUpSupportGenre);
  popUpSupportContent.appendChild(popUpSupportLang);
  popUpSupportContent.appendChild(popUpSupportNetwork);
};

export default commentsPopUp;