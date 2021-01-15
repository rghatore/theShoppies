import './SearchBar.scss';

function SearchBar() {
  return (
    <section className="search_bar">
      <label for="movie_search">Search for a movie title:</label>
      <input type="search" id="movie_search" name="movie_search"
      aria-label="Search omdb database for movies"/>
    </section>
  )
};

export default SearchBar;