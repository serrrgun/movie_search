import View from '../../common/abstract-classes/View';

export default class SearchView extends View {
  constructor(props) {
    super();
    this.props = props;
  }

  get template() {
    return `
      <div class="search wrapper">
        <form class="search__form">
          <label class="search__label">
            <input class="search__input" type="text" placeholder="search movie" autocomplete="off" autofocus>
            <span class="search__input-cross"></span>
          </label>
          <button class="search__btn" type="submit" disabled>search</button>
        </form>
        <p class="search__info"><span class="search__info-word"></span></p>
      </div>
    `;
  }

  bind() {
    const form = this.element.querySelector('.search__form');
    const clearButton = form.querySelector('.search__input-cross');
    form.addEventListener('submit', this.props.onSearchMovies);
    clearButton.addEventListener('click', this.props.onClearInput);
    form.addEventListener('input', this.props.ondisabledButton);
  }
}
