import './SearchResults.scss';
import SearchResultsItem from './SearchResultsItem';

function SearchResults(props) {

  // const nominate = (movie) => {
    // console.log(`clicked ${movie.Title}`)
    // props.nominate(movie);
  // }

  return (
    <ul className="search_results">
      {
        props.results.map(
        movie => <SearchResultsItem 
          key={movie.imdbID} 
          item={movie}
          onClick={() => props.nominate(movie)}
          // onClick={() => nominate(movie)}
          nominations={props.nominations}
          />
        )
      }
    </ul>
  )
};

export default SearchResults;