import TranslateModel from '../translate/translateModel';
import SearchConverter from './converter';
import PopupController from '../../controllers/PopupController';

export default class SearchModel {
  constructor(apiUrl, key) {
    this.apiUrl = apiUrl;
    this.key = key;
    this.translate = new TranslateModel();
    this.popup = new PopupController({ parentNodeSelector: 'body' });
  }

  async getMovies(searchValue, page = 1) {
    const translateWord = await new TranslateModel(searchValue).getWord();
    const url = `${this.apiUrl}?s=${translateWord}&apikey=${this.key}&page=${page}`;
    const response = await fetch(url);
    if (response.status > 300 || response.status < 200) {
      return this.popup.render();
    }
    const data = await response.json();
    const moviesData = data.Search;
    const fullMoviesData = await this.getFullMoviesData(moviesData);
    const result = fullMoviesData.map((movie) => SearchConverter.converter(movie));
    return result;
  }

  async getFullMoviesData(movieData) {
    return Promise.all(movieData.map((movie) => this.getMovieData(movie.imdbID)));
  }

  async getMovieData(omdbId) {
    const url = `${this.apiUrl}?i=${omdbId}&apikey=${this.key}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  }
}
