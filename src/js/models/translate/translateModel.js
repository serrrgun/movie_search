import constants from '../../common/constants';
import NotifycationController from '../../controllers/NotifycationController';
import PopupController from '../../controllers/PopupController';

export default class TranslateModel {
  constructor(value) {
    this.value = value;
    this.notifyction = new NotifycationController();
    this.popup = new PopupController({ parentNodeSelector: 'body' });
  }

  async getTranslateWord() {
    const url = `${constants.YandexApi}?key=${constants.YandexKey}&text=${this.value}&lang=ru-en`;
    const response = await fetch(url);
    if (response.status > 300 || response.status < 200) {
      this.popup.render();
    }
    const data = await response.json();
    return data.text.join('');
  }

  async getWord() {
    let word;
    if (this.value.match(/(^[А-я0-9\s]+)(?!.*[A-z])$/)) {
      word = await this.getTranslateWord();
      this.notifyction.getTextNotifycation(`Showing results for  ${word}`);
    } else {
      word = this.value;
      this.notifyction.getTextNotifycation('');
    }
    return word;
  }
}
