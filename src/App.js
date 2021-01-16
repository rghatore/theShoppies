import { useEffect, useState } from 'react';
import './App.scss';
import NominationList from './components/NominationList';
import SearchBar from './components/SearchBar.js'
import SearchResults from './components/SearchResults';

function App() {

  const [term, setTerm] = useState("");
  const [results, setResults] = useState(["Superman", "Superman 2", "Superman 3"]);
  const [nominations, setNominations] = useState(["", "", "", "", ""])

  useEffect(() => {
    console.log("Search term changed");
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
