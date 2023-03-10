import imageRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const regApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };
  // console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="rick & morty" className='img-home'/>
            <button onClick={regApi} className="btn-search">Buscar personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
