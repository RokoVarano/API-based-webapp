import involvement from '../backend/involvementAPI';

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

  const popUpSupportType = document.createElement('h4');
  popUpSupportType.className = 'popup-support-text';
  popUpSupportType.textContent = `Show Type: ${object.show.type}`;

  const popUpSupportGenre = document.createElement('h4');
  popUpSupportGenre.className = 'popup-support-text';
  popUpSupportGenre.textContent = `Genre: ${object.show.genres[0]}`;

  const popUpSupportLang = document.createElement('h4');
  popUpSupportLang.className = 'popup-support-text';
  popUpSupportLang.textContent = `Language: ${object.show.language}`;

  const popUpSupportNetwork = document.createElement('h4');
  popUpSupportNetwork.className = 'popup-support-text';
  popUpSupportNetwork.innerHTML = `Network: ${object.show.network.name}`;

  involvement.getComments(object.show.id)
    .then((comments) => {
      if (comments.length > 0) {
        const popUpComments = document.createElement('div');
        popUpComments.className = 'popup-comments';
        commentsSection.appendChild(popUpComments);

        const popUpCommentsTitle = document.createElement('h3');
        popUpCommentsTitle.className = 'comments-title';
        popUpCommentsTitle.textContent = 'Comments';
        popUpComments.appendChild(popUpCommentsTitle);

        for (let i = 0; i < comments.length; i += 1) {
          comments[i].creation_date = comments[i].creation_date.replace('-', '/').replace('-', '/');
          const displayComment = document.createElement('p');
          displayComment.textContent = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;
          popUpComments.appendChild(displayComment);
        }
      }
    })
    .then(() => {
      const addComment = document.createElement('div');
      addComment.className = 'add-comment';
      commentsSection.appendChild(addComment);

      const addCommentTitle = document.createElement('h3');
      addCommentTitle.className = 'add-comment-title';
      addCommentTitle.textContent = 'Add a comment';
      addComment.appendChild(addCommentTitle);

      const addCommentForm = document.createElement('form');
      addCommentForm.id = 'form';
      addCommentForm.className = 'form';
      addComment.appendChild(addCommentForm);

      const addCommentInputName = document.createElement('input');
      addCommentInputName.type = 'text';
      addCommentInputName.className = 'input-name';
      addCommentInputName.placeholder = 'Your name';
      addCommentInputName.required = true;
      addCommentForm.appendChild(addCommentInputName);

      const addCommentInputMess = document.createElement('textarea');
      addCommentInputMess.className = 'input-message';
      addCommentInputMess.placeholder = 'Your insights';
      addCommentInputMess.required = true;
      addCommentForm.appendChild(addCommentInputMess);

      const addCommentSubmitBtn = document.createElement('button');
      addCommentSubmitBtn.id = 'add-comment-btn';
      addCommentSubmitBtn.className = 'add-comment-btn';
      addCommentSubmitBtn.textContent = 'Comment';
      addCommentForm.appendChild(addCommentSubmitBtn);
    });

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