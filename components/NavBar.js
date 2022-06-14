import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Home } from '@styled-icons/boxicons-regular/Home'
import { Contact } from '@styled-icons/boxicons-solid/Contact'
import { Project } from '@styled-icons/octicons/Project'
import { Aboutdotme } from '@styled-icons/simple-icons/Aboutdotme'
import { MoonFill } from '@styled-icons/bootstrap/MoonFill'
import { Link } from 'react-scroll'
import { LightbulbFill } from '@styled-icons/bootstrap/LightbulbFill'
import Burger from './Burger/Burger';
import { useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'



const Navbar = props => {
    const isBreakpoint = useMediaQuery(768)
    const [menu, setMenu] = useState(false)


    return (
        <Nav id='Home'>
            {!isBreakpoint ? (<CV href='CVRhys.pdf' download>CV / Résumé</CV>) : (null)}
            {isBreakpoint ? (

                <Burger menu={menu} setMenu={setMenu} />

            ) : (

                <NavMenu>

                    <Link to='Home'>
                        <HomeIcon />
                        <span >HOME</span>
                    </Link>
                    <Link to='aboutSection'>
                        <AboutIcon />
                        <span>ABOUT</span>
                    </Link>
                    <Link to='projectSection'>
                        <ProjectIcon />
                        <span>PROJECTS</span>
                    </Link>
                    <Link to='contactSection'>
                        <ContactIcon />
                        <span>CONTACT</span>
                    </Link>

                </NavMenu>
            )}{menu ? <NavMenu>
                <Link to='Home'>
                    <HomeIcon />
                    <span >HOME</span>
                </Link>
                <Link to='aboutSection'>
                    <AboutIcon />
                    <span>ABOUT</span>
                </Link>
                <Link to='projectSection'>
                    <ProjectIcon />
                    <span>PROJECTS</span>
                </Link>
                <Link to='contactSection'>
                    <ContactIcon />
                    <span>CONTACT</span>
                </Link>

            </NavMenu> : null}



            <Toggle>
                {props.theme === 'light' ? <DarkToggle onClick={() => {
                    props.setTheme('dark');
                }} /> : <LightToggle onClick={() => {
                    props.setTheme('light');
                }} />}
            </Toggle>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    max-width: 100%;
    font-family: 'Roboto', sans-serif;
    border-bottom: 3px solid ${({ theme }) => theme.text};;
    @media (max-width: 768px) {
        width:100%;
    justify-content: space-between;
}
    
    `
const CV = styled.a`
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    color:white;
    margin-left: 5px;
    padding: 0.2%;
    border-radius: 0.5rem;
    border: 3px solid;
    text-decoration: none;
    text-align: center;
    cursor: pointer;

    &:hover{
        
        filter: brightness(0.8);
        
    }

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    max-width: 100%;
    @media (max-width: 768px) {
        background: #090b13;
        margin-left:-10%;
        margin-top: 40.5% ;
        position:absolute ;
        flex-direction:column;
        align-items:flex-start;
        border-radius: 0.5rem;
        border-top-left-radius:0;
        border-top-right-radius:0;
        border-right: 3px solid;
        border-left: 3px solid;
        border-bottom: 3px solid;
        padding:1%;
}

    a {
        margin-top:0.5rem;
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
            
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            color:white;
            margin-left: 5px;
            

            &:after{
                content:"";
                height: 2px;
                background:white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                //line animation under nav mend <a> items
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);

            }
        }

        &:hover {
            span:after{
                //line animation under nav mend <a> items
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
    
    `

const DarkToggle = styled(LightbulbFill)`
    height: 30px;
    min-width: 30px;
    padding: .3rem;
    color: ${({ theme }) => theme.darkToggler};
    border-radius: 0.5rem;
    border: 3px solid ${({ theme }) => theme.darkToggler};;
    cursor: pointer;

    &:hover{
        
        color: ${({ theme }) => theme.darkHover};
        border: 3px solid ${({ theme }) => theme.darkHover};
    }

    
    `

const LightToggle = styled(MoonFill)`
    height: 30px;
    min-width: 30px;
    padding: .3rem;
    color: ${({ theme }) => theme.darkToggler};
    border-radius: 0.5rem;
    border: 3px solid ${({ theme }) => theme.darkToggler};;
    cursor: pointer;

    &:hover{
    
    color: ${({ theme }) => theme.darkHover};
    border: 3px solid ${({ theme }) => theme.darkHover};
}


`

const Toggle = styled.span`

   
`

const HomeIcon = styled(Home)`
height: 20px;
color: white;



`
const ContactIcon = styled(Contact)`
height: 20px;
color: white;



`
const ProjectIcon = styled(Project)`
height: 20px;
color: white;



`

const AboutIcon = styled(Aboutdotme)`
height: 20px;
color: white;
border: 2px solid white;
padding: 1px;
border-radius: 0.5rem;



`