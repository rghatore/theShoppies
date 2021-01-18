import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import NominationList from './components/NominationList';
import SearchBar from './components/SearchBar.js'
import SearchResults from './components/SearchResults';
import Banner from './components/Banner';

function App() {

  const [state, setState] = useState({
    results: [],
    nominations: ["", "", "", "", ""],
    totalNominated: 0
  })

  // in order to fix error while deploying
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (term) {
      axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${term}&type=movie`)
      .then(({ data }) => {
        console.log(data); // upto ten results
        // !data.Error && setResults([...data.Search])
        !data.Error && setState(prev => ({ ...prev, results: data.Search }))
      })
    } else {
      setState(prev => ({ ...prev, results: [] }))
    }

  }, [term]);

  const nominate = (movie) => {
    console.log(`clicked ${movie.Title}`)
    const nominations = [...state.nominations];
    // find empty index and add movie into the nominations array
    const emptySpot = nominations.indexOf("");
    nominations[emptySpot] = movie;
    setState(prev => ({ ...prev, nominations, totalNominated: prev.totalNominated++ }));
  }

  const remove = (movie) => {
    console.log(`removing movie ${movie.Title}`)
    const nominations = [...state.nominations];
    // find movie index and remove movie from the nominations array
    const movieSpot = nominations.findIndex(item => item.imdbID === movie.imdbID);
    nominations[movieSpot] = "";
    setState(prev => ({ ...prev, nominations, totalNominated: prev.totalNominated-- }));
  }

  return (
    <div className="App">
      {state.totalNominated === 5 && <Banner/>}
      <header>
        <img id="logo" src="theShoppiesLogo.png" alt="logo" width={50}/>
        <h1 id="title">The Shoppies</h1>
      </header>
      <main className="content_main">
        <section className="content_search">
          <SearchBar onSearch={term => setTerm(term)}/>
          <p>Select your favourite movies to nominate for the Shoppies:</p>
          <SearchResults
            results={state.results}
            nominate={nominate}
            nominations={state.nominations}
            total={state.totalNominated}
          />
        </section>
        <aside className="content_nominations">
          <h2 className="text_nominations">Nominations</h2>
          <NominationList
            nominations={state.nominations}
            remove={remove}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
