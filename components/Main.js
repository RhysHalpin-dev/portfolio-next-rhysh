import React from 'react'
import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'

const Main = () => {

    const gitUrl = 'https://github.com/RhysHalpin-dev'
    const linkedUrl = 'https://www.linkedin.com/in/rhys-halpin-9b387410b/'

    return (
        <Container id='mainSection'>
            <TextContainer>
                <Title>Rhys Halpin.</Title>
                <Desc>Graduate, Full stack, UK </Desc>
                <Icons>
                    <GitHubIcon onClick={() => {
                        window.open(gitUrl, '_blank');
                    }} />
                    <LinkedinIcon onClick={() => {
                        window.open(linkedUrl, '_blank');
                    }} />
                </Icons>
            </TextContainer>
        </Container>
    )
}

export default Main;

const Container = styled.div`

    display: flex;  
    justify-content: center;
    align-items: center;
    //border: solid 3px white;
    width: auto;
    height: 52rem;


`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid white;
    padding: 10%


`
const Title = styled.h1`
    font-size: 5em;


`

const Desc = styled.h2`
    margin-top: -50px;
    font-size: 3em;
    font-style: italic;



`
const Icons = styled.div`
    display: flex;
    align-items: center;


`

const GitHubIcon = styled(Github)`
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    &:hover{
            transform: scale(1.25);
            padding: 5px;
        }
`

const LinkedinIcon = styled(LinkedinSquare)`
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    &:hover{
            transform: scale(1.25);
            padding-left: 5px;
            color: #2867B2;
            
        }
`