import View from '../../common/abstract-classes/View';

export default class PreloaderView extends View {
  constructor(props) {
    super();
    this.props = props;
  }

  get template() {
    return `
      <div class="preloader">
        <div class="preloader__wrapper">
          <span class="preloader__item preloader__item--1"></span>
          <span class="preloader__item preloader__item--2"></span>
          <span class="preloader__item preloader__item--3"></span>
          <span class="preloader__item preloader__item--4"></span>
        </div>
      </div>
    `;
  }

  render() {
    const app = document.querySelector('.main-content');
    app.append(this.element);
  }

  start() {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'flex';
  }

  end() {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
  }
}
