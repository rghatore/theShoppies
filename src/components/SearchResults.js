import './SearchResults.scss';
import SearchResultsItem from './SearchResultsItem';

function SearchResults(props) {
  return (
    // <ul className="nomination_list">
    // </ul>
    <ul className="search_results">
      {props.results.map(movie => <SearchResultsItem item={movie}/>)}
    </ul>
  )
};

export default SearchResults;