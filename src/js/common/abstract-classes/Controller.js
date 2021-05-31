export default class Controller {
  constructor(props) {
    if (new.target === Controller) {
      throw new Error('Can`t instantiate Controller, only concrete one');
    }

    this.props = props;
    this.state = {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  appendView(view) {
    document.querySelector(this.props.parentNodeSelector).append(view);
  }

  removeView(view) {
    document.querySelector(this.props.parentNodeSelector).remove(view);
  }
}
