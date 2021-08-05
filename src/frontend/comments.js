import involvement from '../backend/involvementAPI';

const commentsPopUp = (object) => {
  const commentsCounter = (id) => {
    involvement.getComments(id)
      .then((comments) => {
        const commentsCounter = document.getElementById('comments-counter');
        const commentsNum = comments.length === undefined ? 0 : comments.length;
        commentsCounter.textContent = `Comments (${commentsNum})`;
      });
  };

  const containerBackdrop = document.createElement('div');
  containerBackdrop.className = 'backdrop';
  containerBackdrop.addEventListener('click', (e) => {
    if (e.target.className === 'backdrop') {
      containerBackdrop.remove();
    }
  });
  document.body.appendChild(containerBackdrop);

  const commentsSection = document.createElement('section');
  commentsSection.className = 'comments-section';
  containerBackdrop.appendChild(commentsSection);

  const popUpImage = document.createElement('img');
  popUpImage.className = 'popup-image';
  popUpImage.src = object.show.image.medium;
  commentsSection.appendChild(popUpImage);

  const popUpTitle = document.createElement('h2');
  popUpTitle.className = 'popup-title';
  popUpTitle.textContent = object.show.name;
  commentsSection.appendChild(popUpTitle);

  const popUpSupportContent = document.createElement('div');
  popUpSupportContent.className = 'popup-support-content';
  commentsSection.appendChild(popUpSupportContent);

  const popUpSupportType = document.createElement('h4');
  popUpSupportType.className = 'popup-support-text';
  popUpSupportType.textContent = `Show Type: ${object.show.type}`;
  popUpSupportContent.appendChild(popUpSupportType);

  const popUpSupportGenre = document.createElement('h4');
  popUpSupportGenre.className = 'popup-support-text';
  popUpSupportGenre.textContent = `Genre: ${object.show.genres[0]}`;
  popUpSupportContent.appendChild(popUpSupportGenre);

  const popUpSupportLang = document.createElement('h4');
  popUpSupportLang.className = 'popup-support-text';
  popUpSupportLang.textContent = `Language: ${object.show.language}`;
  popUpSupportContent.appendChild(popUpSupportLang);

  const popUpSupportNetwork = document.createElement('h4');
  popUpSupportNetwork.className = 'popup-support-text';
  popUpSupportNetwork.innerHTML = `Network: ${object.show.network.name}`;
  popUpSupportContent.appendChild(popUpSupportNetwork);

  const popUpComments = document.createElement('div');
  popUpComments.className = 'popup-comments';
  commentsSection.appendChild(popUpComments);

  const popUpCommentsTitle = document.createElement('h3');
  popUpCommentsTitle.id = 'comments-counter';
  popUpCommentsTitle.className = 'comments-title';
  popUpCommentsTitle.textContent = commentsCounter(object.show.id);
  popUpComments.appendChild(popUpCommentsTitle);

  involvement.getComments(object.show.id)
    .then((comments) => {
      if (comments.length > 0) {
        const popUpCommentsContainer = document.createElement('ul');
        popUpCommentsContainer.id = 'comments-list';
        popUpCommentsContainer.className = 'comments-list';
        popUpComments.appendChild(popUpCommentsContainer);

        for (let i = 0; i < comments.length; i += 1) {
          comments[i].creation_date = comments[i].creation_date.replace('-', '/').replace('-', '/');
          const listItem = document.createElement('li');
          listItem.className = 'comm-list-item';
          popUpCommentsContainer.appendChild(listItem);

          const displayComment = document.createElement('p');
          displayComment.className = 'comment';
          displayComment.textContent = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;
          listItem.appendChild(displayComment);
        }
      }
    })
    .then(() => {
      const addComment = document.createElement('div');
      addComment.className = 'add-comment';
      commentsSection.appendChild(addComment);

      const addCommentTitle = document.createElement('h3');
      addCommentTitle.className = 'comments-title';
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
      addCommentSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const userName = addCommentInputName.value;
        const message = addCommentInputMess.value;
        involvement.createNewComment(object.show.id, userName, message)
          .then(() => {
            commentsCounter(object.show.id);
            involvement.getComments(object.show.id)
              .then((raw) => {
                const refreshedComments = raw;
                const lastItem = raw.length - 1;
                const newCommentItem = document.createElement('p');
                newCommentItem.className = 'comment';
                newCommentItem.textContent = `${refreshedComments[lastItem].creation_date.replace('-', '/').replace('-', '/')} ${refreshedComments[lastItem].username}: ${refreshedComments[lastItem].comment}`;

                if (document.getElementById('comments-list') === null) {
                  const popUpCommentsContainer = document.createElement('ul');
                  popUpCommentsContainer.id = 'comments-list';
                  popUpCommentsContainer.className = 'comments-list';
                  popUpComments.appendChild(popUpCommentsContainer);
                  popUpCommentsContainer.appendChild(newCommentItem);
                } else {
                  const commentsList = document.getElementById('comments-list');
                  commentsList.appendChild(newCommentItem);
                }
              });
          });
      });
      addCommentForm.appendChild(addCommentSubmitBtn);
    });
};

export default commentsPopUp;