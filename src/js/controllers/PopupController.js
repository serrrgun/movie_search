import Controller from '../common/abstract-classes/Controller';
import PopupView from '../views/PopupView/PopupView';

export default class PopupController extends Controller {
  constructor(props) {
    super();
    this.props = props;
    this.popupView = new PopupView({ onClosePopup: this.onClosePopup.bind(this) });
  }

  onClosePopup(event) {
    const popup = event.target;
    popup.remove();
  }

  render() {
    const popupTemplate = this.popupView.element;
    this.appendView(popupTemplate);
  }
}
