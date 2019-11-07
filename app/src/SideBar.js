import React from 'react';
import './styles/Sidebar.scss';

export default function SideBar(props) {
    const {pokemonList, onClickPokemon, seletedPokemonIndex} = props;
    return (
        <div className="Sidebar">
            <ul> 
            {
                pokemonList.length > 0 ? 
                    pokemonList.map((pokemon,index) => {
                        const data = pokemon.data;
                        return <li 
                                    key={index}
                                    onClick={() => onClickPokemon(data, index)}
                                    className={seletedPokemonIndex === index ? "Selected": null}
                                >{data.species.name}</li>
                    }) : null
            }
            </ul>
        </div>
    )
}