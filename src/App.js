import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import NominationList from './components/NominationList';
import SearchBar from './components/SearchBar.js'
import SearchResults from './components/SearchResults';

function App() {

  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState(["", "", "", "", ""])

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${term}&type=movie`)
    .then(({ data }) => {
      console.log(data); // upto ten results
      !data.Error && setResults([...data.Search])
    })
  }, [term]);

  return (
    <div className="App">
      <>
        <header>
          <img id="logo" src="logo192.png" alt="logo" width={50}/>
          <h1>The Shoppies</h1>
        </header>
        <main className="content_main">
          <section className="content_search">
            <SearchBar onSearch={term => setTerm(term)}/>
            <p>Select your favourite movies to nominate for the Shoppies:</p>
            <SearchResults results={results}/>
          </section>
          <aside className="content_nominations">
            <h2 className="text_nominations">Nominations</h2>
            <NominationList selected={nominations}/>
          </aside>
        </main>
      </>
    </div>
  );
}

export default App;
