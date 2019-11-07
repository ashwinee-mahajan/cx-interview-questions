import React, { useEffect, useState, useCallback } from 'react';
import SideBar from './SideBar';
import Container from './Container';
import './styles/Home.scss';
import axios from 'axios';
import {getRandomNumbers} from './utility/randomNumber';

export default function Home() {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState({});
    const [seletedPokemonIndex, setSelectedPokemonIndex] = useState(0);
    useEffect(() => {
        const loadData = async (randomNumbers) => {
            const uri = `https://pokeapi.co/api/v2/pokemon/`;

            const response = await axios.all(randomNumbers.map((number) => {
                return axios.get(`${uri}${number}`)
            }));
            setPokemonList(response);
            setPokemonDetails(response[0].data);
        }
        const randomNumbers = getRandomNumbers(10, 0, 151);
        loadData(randomNumbers)
    }, [])

    const onClickPokemon = useCallback( (data, index) => {
        setPokemonDetails(data)
        setSelectedPokemonIndex(index)
    }, [setPokemonDetails])

    return (
        <main className="Main">
            <SideBar 
                pokemonList={pokemonList}
                onClickPokemon={onClickPokemon}
                seletedPokemonIndex={seletedPokemonIndex}/>
            {
                Object.entries(pokemonDetails).length !== 0 ? <Container pokemonDetails={pokemonDetails}/> : null
            }
            
        </main>
    )
}