import 'normalize.css';
import 'swiper';
import 'swiper/css/swiper.min.css';
import './scss/style.scss';
import AppController from './js/controllers/AppController';

const data = new AppController({ parentNodeSelector: '.app' });
data.render();
