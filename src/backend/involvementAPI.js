const involvement = {
  appURL: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JCyDFdS4lOPMchZOqGGZ/comments',
  createNewApp: async () => {
    const rawResp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const newAppID = await rawResp.text();

    return newAppID;
  },
  createNewComment: async function(commID, commUserName, comm) {
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

    if (rawResp.ok) { // Remove when done
      console.log('Comment created');
    }
  },
};