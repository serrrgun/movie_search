import View from '../../common/abstract-classes/View';

export default class SearchView extends View {
  constructor(props) {
    super();
    this.props = props;
  }

  get template() {
    return `
      <div class="slider">
        <div class="slider__container swiper-container">
          <div class="slider__wrapper swiper-wrapper"></div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="slider__btn-prev swiper-button-prev"></div>
        <div class="slider__btn-next swiper-button-next"></div>
      </div>
    `;
  }
}
