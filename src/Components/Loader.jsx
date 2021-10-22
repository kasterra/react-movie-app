import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    font-size:28pt;
`;

const Loader = () =><Container><FontAwesomeIcon icon={faSpinner} pulse size="5x"/></Container>

export default Loader;