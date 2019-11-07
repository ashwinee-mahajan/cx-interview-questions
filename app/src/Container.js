import React, {useEffect, useState} from 'react';
import './styles/Container.scss';

export default function Container(props) {
        const {pokemonDetails} = props;
        const {sprites, species} = pokemonDetails;
        return (
            <div className="Container">
                <div>
                    <img src={sprites['front_default']}></img>
                    <div className="Details">{species['name']}</div>
                </div>
                <div className="Details">
                    <div>Speed</div>
                    <div>Defence.....</div>
                </div>
            </div>
        )
}