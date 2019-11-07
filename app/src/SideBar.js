import React, { useEffect, useState } from 'react';
import './styles/Sidebar.scss';

export default function SideBar(props) {
    const {pokemonList, onClickPokemon} = props;
    return (
        <div className="Sidebar">
            <ul> 
            {
                pokemonList.length > 0 ? 
                    pokemonList.map((pokemon,index) => {
                        const data = pokemon.data;
                        return <li key={index} onClick={() => onClickPokemon(data)}>{data.species.name}</li>
                    }) : null
            }
            </ul>
        </div>
    )
}