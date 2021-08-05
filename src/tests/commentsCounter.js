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
  const num = involvement.getComments(id)
    .then((comments) => {
      const commentsNum = comments.length === undefined ? 0 : comments.length;
      return commentsNum;
    });
  return num;
};

export default commentsCounter;