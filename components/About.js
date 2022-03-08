import React from "react";
import styled from 'styled-components'

const About = () => {


    return (<Container id='aboutSection'>
        <AboutSec>
            <Title>HELLO! 👋</Title>
            <p>My name is Rhys Halpin, I am a software engineer located in Newcastle upon Tyne UK , recently graduating with a First-Class Honours bachelors degree
                in Computer Science.<br /><br></br>
                I am Currently looking for Full stack opportunities within the Industry   that will
                allow for growth and development to my current Frontend and Backend  skill set.
            </p>
            <h2>languages</h2><div>
                <p>JavaScript (ES6)</p> <p>Typescript</p>
                <p> HTML/CSS </p><p>Python</p>  <p>Node JS</p> <p>PHP</p> <p>MongoDB</p> <p>mysql</p><p>GO(golang)</p>
            </div>
            <h2>Libraries & Frameworks</h2><div>
                <p>React</p> <p>Express</p> <p>Styled-components</p> <p>gorilla
                    /
                    mux
                </p>
            </div>
            <h3>Tools & Platforms</h3>
            <div>
                <p>Git</p> <p>GitHub</p> <p>AWS EC2</p> <p>Azure Compute</p>
            </div>

        </AboutSec>
    </Container >)
}

export default About;

const Container = styled.section`
    text-align: center;
    width: 100%;
    height: 100%;
    border: solid white 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top:2% ;
    padding-bottom:2%;
    
`

const AboutSec = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 3px ${({ theme }) => theme.text};;
    border-radius: 1rem;
    width: 50%;
    height: 100%;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.mainBackground};

    div{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: flex-start;
        flex-wrap: wrap;
        white-space:nowrap;
    }
    h2{
        margin: 10px;
        margin-bottom: -10px;
        letter-spacing: 1.42px;
    }
    h3{
        margin: 10px;
        margin-bottom: -10px;
        letter-spacing: 1.42px;
    }
    p{
        margin:10px;
        text-align: left;
        padding: 0.3rem 0.3rem ;
        margin-bottom: 1rem;
        margin-right: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
        background: ${({ theme }) => theme.highlight};
        border-radius: 5px;

        color: ${({ theme }) => theme.text};
        letter-spacing: 1.42px;
        
        
    }

`

const Title = styled.h1`

    margin:10px;
    border: 3px white solid;
    border-radius: 15px;
    padding: 1%;
    background-color: ${({ theme }) => theme.mainBackground};
    letter-spacing: 1.42px;
    color: ${({ theme }) => theme.text};


`