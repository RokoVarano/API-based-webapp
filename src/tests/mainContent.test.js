/**
 * @jest-environment jsdom
 */
import mockAPI from './mockAPI';
import { loadCounter } from '../frontend/mainContent';

describe('homepage list', () => {
  const main = document.createElement('main');

  it('displays the number of tv shows at the top', () => {
    main.appendChild(loadCounter(mockAPI.length));

    mockAPI.forEach(() => {
      const article = document.createElement('article');
      article.classList.add('tv-show');
      main.appendChild(article);
    });

    expect(main.childNodes[0].textContent).toBe(`Shows: ${main.getElementsByClassName('tv-show').length}`);
    expect(main.childNodes[0].id).toBe('tv-counter');

    main.innerHTML = '';
  });
});