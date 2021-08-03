import mockAPI from '../backend/mockAPI';
import renderHome from '../frontend/home';

describe('homepage list', () => {
  renderHome();
  const main = document.getElementsByTagName('main')[0];

  it('creates one container per element with class="tv-show"', () => {
    const showlengths = main.getElementsByClassName('tv-show').length;

    expect(mockAPI.lengths).toBe(showlengths);
  });

  it('each container has a picture of class "tv-pic" and they are all the same size"', () => {
    const shows = main.getElementsByClassName('tv-show');
    const sizeX = shows[0].getElementsByClassName('tv-pic').offsetWidth;
    const sizeY = shows[0].getElementsByClassName('tv-pic').offsetHeight;
    shows.forEach((show) => {
      expect(show.getElementsByClassName('tv-pic')[0].offsetWidth).toBe(sizeX);
      expect(show.getElementsByClassName('tv-pic')[0].offsetHeight).toBe(sizeY);
    });
  });
});