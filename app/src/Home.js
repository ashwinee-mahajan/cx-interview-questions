import React, { useEffect, useState, useCallback } from 'react';
import SideBar from './SideBar';
import Container from './Container';
import './styles/Home.scss';
import axios from 'axios';

export default function Home() {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState({})
    useEffect(() => {
        const loadData = async () => {
            const uri = `https://pokeapi.co/api/v2/pokemon/`;

            const response = await axios.all([
                axios.get('https://pokeapi.co/api/v2/pokemon/1'),
                axios.get('https://pokeapi.co/api/v2/pokemon/2')
            ]);
            setPokemonList(response);
        }
        loadData()
    }, [])

    const onClickPokemon = useCallback( (data) => {
        setPokemonDetails(data)
    }, [setPokemonDetails])

    return (
        <main className="Main">
            <SideBar pokemonList={pokemonList} onClickPokemon={onClickPokemon}/>
            {
                Object.entries(pokemonDetails).length !== 0 ? <Container pokemonDetails={pokemonDetails}/> : null
            }
            
        </main>
    )
}