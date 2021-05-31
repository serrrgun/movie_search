export default class NotifycationController {
  constructor() {
    this.node = document.querySelector('.search__info');
  }

  getTextNotifycation(text) {
    this.node.textContent = text;
  }
}
