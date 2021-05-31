import View from '../../common/abstract-classes/View';

export default class PopupView extends View {
  constructor(props) {
    super();
    this.props = props;
  }

  get template() {
    return `
      <div class="popup">
        <div class="popup__wrapper">
          <div class="popup__text">Sorry, server busy, try again later</div>
        </div>
      </div>
    `;
  }

  bind() {
    const popup = this.element.querySelector('.popup');
    popup.addEventListener('click', this.props.onClosePopup);
  }
}
