import React from "react";
import styled from 'styled-components'
import { ArrowCircleUp } from '@styled-icons/fa-solid/ArrowCircleUp'
import { Link } from 'react-scroll'
const ScrollToTop = () => {
    return (<Container>
        <Link to='mainSection' smooth={true} offset={-100}>
            <ArrowUp />
        </Link>
    </Container>)
};

export default ScrollToTop

const ArrowUp = styled(ArrowCircleUp)`
    border-radius:3rem ;
    border-style:solid ;
    border-color:black ;
    color:white ;
    background-color:black ;
    width:auto ;
    
`

const Container = styled.div`

    position: fixed;
    width:5rem ;
    left: 90%;
    right: 0;
    bottom: 2rem;
    height: 5rem;
    z-index: 4;
    cursor:pointer ;
    -webkit-animation: fadein 4s;
    @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
    @media (max-width: 1000px) {
        left: 80%;

}


   
`