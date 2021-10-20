import React, { useState, useEffect } from 'react'

const PokeBody = (props) => {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
            .then(response => response.json())
            .then(response => setPokemonList(response.results))
    }, []);

    return (
        <div>
            {pokemonList.length > 0 && pokemonList.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}


export default PokeBody