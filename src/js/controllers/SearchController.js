import constants from '../common/constants';
import Controller from '../common/abstract-classes/Controller';
import SearchView from '../views/SearchView/SearchView';
import SearchModel from '../models/search/searchModel';
import PreloaderView from '../views/PreloaderView/PreloaderView';
import NotifycationController from './NotifycationController';

export default class SearchController extends Controller {
  constructor(props) {
    super();
    this.props = props;
    this.page = constants.StartPage;
    this.searchText = constants.StartSearcValue;
    this.notifycation = null;
    this.searchModel = new SearchModel(constants.MovieApi, constants.DataKey);
    this.searchView = new SearchView({
      onSearchMovies: this.onSearchMovies.bind(this),
      onClearInput: this.onClearInput.bind(this),
      ondisabledButton: this.ondisabledButton.bind(this),
    });
    this.preloaderView = new PreloaderView();
  }

  ondisabledButton(event) {
    const submitButton = event.currentTarget.querySelector('.search__btn');
    const input = event.currentTarget.querySelector('.search__input');
    if (input.value.length > 2) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  onClearInput() {
    const input = document.querySelector('.search__input');
    input.value = '';
  }

  onSearchMovies(event) {
    event.preventDefault();
    this.page = 1;
    const searchText = event.target.querySelector('.search__input').value;
    this.searchText = searchText;
    this.preloaderView.start();
    this.searchModel.getMovies(searchText)
      .then((movies) => {
        this.props.onSearchFinishEvent({ searchText, movies });
      })
      .catch(() => {
        this.notifycation.getTextNotifycation(`No result for ${this.searchText}`);
      })
      .then(() => this.preloaderView.end());
  }

  startMovieSearch() {
    this.preloaderView.render();
    this.searchModel.getMovies(this.searchText, this.page)
      .then((movies) => {
        this.props.startSearch({ movies });
      })
      .catch(() => this.notifycation.getTextNotifycation(`No result for ${this.searchText}`))
      .then(() => this.preloaderView.end());
  }

  nextMovieSearch() {
    this.page += 1;
    this.preloaderView.start();
    this.searchModel.getMovies(this.searchText, this.page)
      .then((movies) => {
        this.props.hasNextSlides({ movies });
      })
      .catch(() => this.notifycation.getTextNotifycation(`End result for ${this.searchText}`))
      .then(() => this.preloaderView.end());
  }

  render() {
    const searchViewTemplate = this.searchView.element;
    this.appendView(searchViewTemplate);
    this.notifycation = new NotifycationController('.search__info');
    this.startMovieSearch();
  }
}
