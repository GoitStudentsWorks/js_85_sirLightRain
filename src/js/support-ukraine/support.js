import charities from './charities';

import Swiper from 'swiper';
import 'swiper/swiper.scss';

const list = document.querySelector('.support-list');
const html = charities.map(makeMarkup).join('');
const swipeDownBtn = document.querySelector('.swiper-next');

swipeDownBtn.addEventListener('click', onNext);

function makeMarkup({ url, title, img }, index) {
  const digits = (index + 1).toString().padStart(2, '0');
  return `
  <li class="swiper-slide">
        <div class="support-item">
        <span class="support-index">${digits}</span>
        <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${img}" 1x
                src="${img}" type="image/png" alt="${title}">
        </a>
    </li> `;
}

list.innerHTML = html;

const str = charities.map((element, index) => {
  return '<li class="support-item"> посилання на фонд <a class="support-link" href=""></a></li>';
});

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  rewind: true,
  spaceBetween: 20,
  effect: 'slide',
  breakpoints: {
    1440: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

function onNext() {
  swiper.slideNext(250);
}
