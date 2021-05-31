import Controller from '../common/abstract-classes/Controller';
import AppView from '../views/AppView/AppView';
import SearchController from './SearchController';
import SliderController from './SliderController';

export default class AppController extends Controller {
  constructor(props) {
    super();
    this.props = props;
    this.nextMovie = [];
    this.appView = new AppView();
    this.searchController = new SearchController({
      parentNodeSelector: '.main-content',
      onSearchFinishEvent: this.onSearchFinishEvent.bind(this),
      startSearch: this.startSearch.bind(this),
      hasNextSlides: this.getNextSlides.bind(this),
    });
    this.sliderController = new SliderController({
      parentNodeSelector: '.main-content',
      hasNextSlides: this.hasNextSlides.bind(this),
    });
  }

  render() {
    const appViewTemplate = this.appView.element;
    this.appendView(appViewTemplate);
    this.searchController.render();
  }

  onSearchFinishEvent({ movies }) {
    this.sliderController.deleteSlides();
    this.sliderController.render(movies);
    this.sliderController.updateSlider();
  }

  getNextSlides({ movies }) {
    this.sliderController.appendSlides(movies);
    this.sliderController.updateSlider();
  }

  hasNextSlides() {
    this.searchController.nextMovieSearch();
  }

  startSearch({ movies }) {
    this.sliderController.render(movies);
  }
}
