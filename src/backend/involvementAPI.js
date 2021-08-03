const involvement = {
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
};