import React, { useEffect } from 'react'
import { Home } from '@styled-icons/boxicons-regular/Home'
import { Contact } from '@styled-icons/boxicons-solid/Contact'
import { Project } from '@styled-icons/octicons/Project'
import { Aboutdotme } from '@styled-icons/simple-icons/Aboutdotme'
import { Link } from 'react-scroll'
import { useState } from 'react'
import styled from 'styled-components'
const Menu = (props) => {
    return (
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
    )

}

export { Menu }

const NavMenu = styled.div`
        background: #090b13;
        position: fixed;
        top: 4.3rem;
        left:0;
        height:10rem;
        display: block;
        flex-direction:column;
        align-items:flex-start;
        border-top-left-radius:0;
        border-top-right-radius:0;
        border-bottom-right-radius:1rem ;
        border-right: 3px solid;
        border-bottom: 3px solid;

        padding:1%;
        display:flex; flex-direction:column; flex:1;

    a {
        margin-top: auto;
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