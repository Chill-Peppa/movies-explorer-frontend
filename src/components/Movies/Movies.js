import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
//import Preloader from '../Preloader/Preloader';
import { moviesArray } from '../../utils/movies';

console.log(`array movie: ${moviesArray}`);
function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default Movies;
