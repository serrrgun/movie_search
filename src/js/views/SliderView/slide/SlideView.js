import View from '../../../common/abstract-classes/View';

export default class SlideView extends View {
  constructor(data, props) {
    super();
    this.data = data;
    this.props = props;
  }

  get template() {
    return `
      <div class="slide swiper-slide">
        <a href="https://www.imdb.com/title/${this.data.id}/videogallery/" class="slide__title" target="_blank">${this.data.title}</a>
        <div class="slide__img">
          <img src="${this.data.posterUrl === 'N/A' ? 'static/img/no-image.png' : this.data.posterUrl}" alt="${this.data.title}">
        </div>
        <div class="slide__info">
          <span class="slide__info-year">Release date: ${this.data.date}</span>
          <span class="slide__info-reating">Rating IMDB: ${this.data.rating}</span>
        </div>
      </div>`;
  }

  bind() {
    const img = this.element.querySelector('img');
    img.addEventListener('load', this.props.onLoadImg);
  }
}
