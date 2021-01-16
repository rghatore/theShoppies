import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import NominationList from './components/NominationList';
import SearchBar from './components/SearchBar.js'
import SearchResults from './components/SearchResults';

function App() {

  const [state, setState] = useState({
    term: "",
    results: [],
    nominations: ["", "", "", "", ""]
  })

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${state.term}&type=movie`)
    .then(({ data }) => {
      console.log(data); // upto ten results
      // !data.Error && setResults([...data.Search])
      !data.Error && setState(prev => ({ ...prev, results: data.Search }))
    })
  }, [state.term]);

  const nominate = (movie) => {
    console.log(`clicked ${movie.Title}`)
    const nominations = [...state.nominations];
    // add movie into the nominations array
    // find empty index
    const emptySpot = nominations.indexOf("");
    nominations[emptySpot] = movie;
    setState(prev => ({ ...prev, nominations }));
  }

  const remove = (movie) => {
    console.log(`removing movie ${movie.Title}`)
    const nominations = [...state.nominations];
    // find movie index and remove
    const movieSpot = nominations.findIndex(item => item.Title === movie.Title);
    nominations[movieSpot] = "";
    setState(prev => ({ ...prev, nominations }));
  }

  return (
    <div className="App">
      <>
        <header>
          <img id="logo" src="logo192.png" alt="logo" width={50}/>
          <h1>The Shoppies</h1>
        </header>
        <main className="content_main">
          <section className="content_search">
            {/* <SearchBar onSearch={term => setTerm(term)}/> */}
            <SearchBar onSearch={term => setState({...state, term})}/>
            <p>Select your favourite movies to nominate for the Shoppies:</p>
            <SearchResults results={state.results} nominate={nominate}/>
          </section>
          <aside className="content_nominations">
            <h2 className="text_nominations">Nominations</h2>
            <NominationList nominations={state.nominations} remove={remove}/>
          </aside>
        </main>
      </>
    </div>
  );
}

export default App;
