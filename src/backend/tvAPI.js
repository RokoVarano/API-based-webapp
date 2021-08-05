const tvAPI = {
  url: 'https://api.tvmaze.com/search/shows?q=shark',
  async get() {
    return fetch(this.url).then((response) => response.json());
  },
};

export default tvAPI;