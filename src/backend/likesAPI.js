class Likes {
  constructor() {
    this.app_id = 'ii8LIjuMgMowiRTVEPsx';
  }

  createApp = async () => {
    const fromLocal = localStorage.getItem('app_id');
    if (fromLocal !== null) {
      this.app_id = fromLocal;
      return;
    }

    const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
      {
        method: 'POST',
      });

    const data = await result.text();
    localStorage.setItem('app_id', data);
    this.app_id = data;
  }

  post = async (itemId) => fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.app_id}/likes/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    });

  get = async () => fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.app_id}/likes/`).then(
    (result) => result.json(),
  )
}

export default Likes;