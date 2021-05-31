import View from '../../common/abstract-classes/View';

export default class AppView extends View {
  constructor(props) {
    super();
    this.props = props;
  }

  get template() {
    return `
      <div class="container">
        <header class="header">
          <h1 class="header__title">Movie Search</h1>
        </header>
        <main class="main-content wrapper"></main>
        <footer class="footer">
          <div class="footer__wrapper">
            <span>RS School 2020q1</span>
            <a href="https://github.com/serrrgun" target="_blank" class="footer__link footer__link">github</a>
          </div>
        </footer>
      </div>
    `;
  }
}
