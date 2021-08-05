const comments = [
  [
    {
      comment: 'Awesome movie!',
      username: 'John Doe',
      creation_date: '2021-08-04',
    },
    {
      username: 'Joe Tribbiani',
      creation_date: '2021-08-04',
      comment: 'Great movie',
    },
    {
      username: 'Rachel Green',
      comment: 'Good one',
      creation_date: '2021-08-04',
    },
  ],
  [
    {
      username: 'Joe Tribbiani',
      creation_date: '2021-08-04',
      comment: 'Great movie',
    },
    {
      username: 'Rachel Green',
      comment: 'Good one',
      creation_date: '2021-08-04',
    },
  ],
  [
    {
      comment: 'Awesome movie!',
      username: 'John Doe',
      creation_date: '2021-08-04',
    },
  ],
  [],
];

const involvement = {
  async getComments(itemID) {
    return comments[itemID];
  },
};

const commentsCounter = (id) => {
  involvement.getComments(id)
    .then((comments) => {
      const commentsCounter = document.getElementById('comments-counter');
      const commentsNum = comments.length === undefined ? 0 : comments.length;
      commentsCounter.textContent = `Comments (${commentsNum})`;
      return commentsNum;
    });
};

export default commentsCounter;