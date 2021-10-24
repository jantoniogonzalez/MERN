import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokeBody = (props) => {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then((response)=> 
                {
                    console.log(response);
                    console.log(response.data.results);
                    setPokemonList(response.data.results);
                })
            .catch((err)=>console.log(err))
    }, []);

    return (
        <div>
                {
                pokemonList.length > 0?
                pokemonList.map((pokemon, index)=>{
                    return (<div key={index}>{pokemon.name}</div>)
                })
                :null
            }
        </div>
    );
}


export default PokeBody