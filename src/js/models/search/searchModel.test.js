import SearchModel from './searchModel';

describe('SearchModel.getFullMoviesData', () => {
  it('Should be an instance of Function', () => {
    expect(new SearchModel().getFullMoviesData).toBeInstanceOf(Function);
  });
});

describe('SearchModel.getFullMoviesData', () => {
  it('Should be an instance of Class', () => {
    expect(new SearchModel()).toBeInstanceOf(SearchModel);
  });
});
