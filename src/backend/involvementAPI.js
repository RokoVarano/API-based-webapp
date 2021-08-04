const involvement = {
  appURL: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JCyDFdS4lOPMchZOqGGZ/comments',
  async createNewApp() {
    const rawResp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const newAppID = await rawResp.text();

    return newAppID;
  },
  async createNewComment(commID, commUserName, comm) {
    const rawResp = await fetch(this.appURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: commID,
        username: commUserName,
        comment: comm,
      }),
    });

    if (rawResp.status !== 201) {
      throw new Error('Something went wrong when creating the new comment');
    }
  },
  async getComments(itemID) {
    const rawResp = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JCyDFdS4lOPMchZOqGGZ/comments?item_id=${itemID}`);
    const comments = await rawResp.json();
    return comments;
  },
};

export default involvement;