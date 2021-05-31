import Swiper from 'swiper';
import Controller from '../common/abstract-classes/Controller';
import SliderView from '../views/SliderView/SliderView';
import SlideView from '../views/SliderView/slide/SlideView';

export default class SliderController extends Controller {
  constructor(props) {
    super();
    this.props = props;
    this.swiper = null;
    this.sliderView = new SliderView();
  }

  initSlider() {
    this.swiper = new Swiper('.slider__container', {
      slidesPerView: 1,
      spaceBetween: 10,
      preloadImages: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1680: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  onLoadImg() {
    const img = document.querySelectorAll('.slide__img');
    img.forEach((item) => item.classList.add('slide__img--active'));
  }

  updateSlider() {
    this.swiper.update();
  }

  addSlides() {
    this.swiper.on('reachEnd', () => {
      this.props.hasNextSlides();
    });
  }

  deleteSlides() {
    this.swiper.removeAllSlides();
  }

  render(movies) {
    const sliderViewTemplate = this.sliderView.element;
    this.appendView(sliderViewTemplate);
    this.appendSlides(movies);
    this.initSlider();
    this.addSlides();
  }

  appendSlides(movies) {
    const arr = movies.map((movie) => new SlideView(movie, { onLoadImg: this.onLoadImg.bind(this) }).element.outerHTML).join('');
    const sliderWrapper = document.querySelector('.slider__wrapper');
    sliderWrapper.insertAdjacentHTML('beforeend', arr);
  }
}
