import Movie from './converter-helper';

export default class SearchConverter {
  static converter(movieData) {
    return new Movie(
      movieData.Title,
      movieData.Poster,
      movieData.Released,
      movieData.imdbRating,
      movieData.imdbID,
    );
  }
}
