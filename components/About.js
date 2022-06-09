import React from "react";
import styled from 'styled-components'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Goland } from '@styled-icons/simple-icons/Goland'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { TypescriptImg, GolangImg, ReactLogoImg, LogoPythonImg, MongodbImg, RaspberryPiImg, Html5Img, NodejsImg, MysqlImg, AwsImg, GitImg } from '../components/imgsAbout'

const About = () => {


    return (<Container id='aboutSection'>
        <AboutSec>
            <Title>HELLO! 👋</Title>
            <p className="intro">My name is Rhys Halpin, I am a software engineer located in Newcastle upon Tyne UK , recently graduating with a First-Class Honours bachelors degree
                in Computer Science.<br /><br></br>
                I am Currently looking for Full stack opportunities within the Industry   that will
                allow for growth and development to my current Front and Backend  skill set.
            </p>
            <h1># Tech I&apos;ve worked with</h1>
            <SkillList>
                <SkillWrapper>
                    <TypescriptImg></TypescriptImg>
                    <p>Typescript</p>
                </SkillWrapper>
                <SkillWrapper>
                    <GolangImg></GolangImg>
                    <p>Go (golang)</p>
                </SkillWrapper>
                <SkillWrapper>
                    <TypescriptImg></TypescriptImg>
                    <p>Next JS</p>
                </SkillWrapper>
                <SkillWrapper>
                    <ReactLogoImg ></ReactLogoImg >
                    <p>ReactJS</p>
                </SkillWrapper>
                <SkillWrapper>
                    <NodejsImg></NodejsImg>
                    <p>Node JS</p>
                </SkillWrapper>
                <SkillWrapper>
                    <MongodbImg></MongodbImg>
                    <p>Mongodb</p>
                </SkillWrapper>
                <SkillWrapper>
                    <MysqlImg></MysqlImg>
                    <p>Mysql</p>
                </SkillWrapper>
                <SkillWrapper>
                    <LogoPythonImg></LogoPythonImg>
                    <p>Python</p>
                </SkillWrapper>
            </SkillList>
            <h1># Tools & Platforms</h1>
            <SkillList>
                <SkillWrapper>
                    <GitImg></GitImg>
                    <p>Git</p>
                </SkillWrapper>
                <SkillWrapper>
                    <AwsImg></AwsImg>
                    <p>Aws EC2</p>
                </SkillWrapper>
            </SkillList>
        </AboutSec>
    </Container >)
}

export default About;

const SkillList = styled.div`
display:flex ;
flex-direction:row ;
//border: blue solid;
flex-wrap: wrap;
justify-content:center ;
padding:1%;
`
const SkillWrapper = styled.div`
align-items:center ;
display: flex;
width: 50%;
align-items: center;
gap: 1rem;
//border: 3px white solid
p{
        
        margin-left:0;
        margin-right:0;
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 500; 
        
        
    }
`

const Container = styled.section`
    
    width: auto;
    height: 100%;
    //border: solid white 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top:2% ;
    padding-bottom:2%;
    
`

const AboutSec = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 3px ${({ theme }) => theme.text};
    border-radius: 1rem;
    width: 40%;
    height: 100%;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.mainBackground};

    /*div{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: flex-start;
        flex-wrap: wrap;
        white-space:nowrap;
    }*/
    h1{
        margin-left:1rem;
        margin-bottom: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 600;
        font-family: 'M PLUS Rounded 1c', sans-serif;
    }
    .intro{
        
        margin-left:1rem;
        margin-right:1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 500; 
        font-family: 'M PLUS Rounded 1c', sans-serif;
        
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