import React from 'react';
import styled,{css} from 'styled-components';

const Highlighted = styled.div`
    background-color: #f1c40f;
    color:#2c3e50;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    width:max-content;
    padding:10px;
    border-radius:9999px;
    ${(props)=>props.disabled && css`
        background-color:#2c3e50;
        color:#bdc3c7;
    `}
`;

const IMDB = (externalID) => {
    const {externalID:{imdb_id:imdbId}} = externalID;
    if(!imdbId){
        return <Highlighted disabled>IMDB</Highlighted>
    }
    return (
    <a href={`https://www.imdb.com/title/${imdbId}`}>
        <Highlighted>
            IMDB
        </Highlighted>
    </a>)
    
}

export default IMDB;