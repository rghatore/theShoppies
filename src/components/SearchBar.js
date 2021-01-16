import { useState, useEffect, useCallback } from "react";
import useDebounce from '../hooks/useDebounce';
import './SearchBar.scss';

function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);
  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className="search_bar">
      <label for="movie_search">Search for a movie title:</label>
      <input 
        type="search"
        id="movie_search"
        name="movie_search"
        aria-label="Search omdb database for movies"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </section>
  )
};

export default SearchBar;