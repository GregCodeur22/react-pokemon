import React, {FunctionComponent, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';


  
const App: FunctionComponent = () => {
 const [name, setName] = useState<string>('React')
 const [pokémon, setPokémon] = useState<Pokemon[]>(POKEMONS)
    
 return (
  <div>
    <h1> Pokédex </h1>
    <p>Il y a {pokémon.length} pokémons dans le Pokédex  </p>
  </div>
 )
}
  
export default App;