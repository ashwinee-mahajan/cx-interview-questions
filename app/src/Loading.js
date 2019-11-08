import React from 'react';
import './styles/Loading.scss';
import { ClipLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className="Loading">
            <ClipLoader
                sizeUnit={"px"}
                size={150}
                color={'#36D7B7'}
                loading= {true}
            />
        </div>
    )
}