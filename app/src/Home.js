import React, { useState } from 'react';
import Container from './Container';
import './styles/Home.scss';
import axios from 'axios';
import { getRandomNumbers } from './utility/randomNumber';

export default function Home() {

    const [pokemonDetails, setPokemonDetails] = useState({});

    const loadData = async (randomNumber) => {
        const uri = `https://pokeapi.co/api/v2/pokemon/`;
        try {
            const response = await axios.get(`${uri}${randomNumber}`)
            setPokemonDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const loadPokemon = () => {
        const randomNumbers = getRandomNumbers(1, 1, 151);
        loadData(randomNumbers[0])
    }

    return (
        <main className="Main">
            <button className="MainButton" onClick={loadPokemon}>Load Pokemon</button>
            {
                Object.entries(pokemonDetails).length !== 0 ? <Container pokemonDetails={pokemonDetails} /> : null
            }
        </main>
    )
}