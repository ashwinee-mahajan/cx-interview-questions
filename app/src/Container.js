import React, {useEffect, useState} from 'react';
import './styles/Container.scss';

export default function Container(props) {
        const {pokemonDetails} = props;
        const {sprites, species, stats, weight} = pokemonDetails;
        return (
            <div className="Container">
                <div className="ContentHeader">
                    <img src={sprites['front_default']}></img>
                    <div className="Details">{species['name']}</div>
                </div>
                <div className="Details">
                    <div>Speed {stats[0]['base_stat']}</div>
                    <div>Defence {stats[3]['base_stat']} / Special {stats[1]['base_stat']}</div>
                    <div>Attack {stats[4]['base_stat']} / Special {stats[2]['base_stat']}</div>
                    <div>Hp {stats[5]['base_stat']}</div>
                    <div>Weight {weight}</div>
                </div>
            </div>
        )
}