import test from '../imgs/test.png'
import styled from 'styled-components'
import Image from 'next/image'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { LogoPython } from '@styled-icons/ionicons-solid/LogoPython'
import { Mongodb } from '@styled-icons/simple-icons/Mongodb'
import { RaspberryPi } from '@styled-icons/fa-brands/RaspberryPi'
import { Html5 } from '@styled-icons/typicons/Html5'
import { Goland } from '@styled-icons/simple-icons/Goland'

const TypescriptImg = styled(Typescript)`
  color: #007acc;
  background-color: #ffffff;
  height: 50px;
`
const GolangImg = styled(Goland)`
    height: 50px;
    
    background-color: #01ADD8;

`
const ReactLogoImg = styled(ReactLogo)`
    color:#61DBFB;
    height: 50px;
`

const LogoPythonImg = styled(LogoPython)`
    height: 50px;

`
const MongodbImg = styled(Mongodb)`
    color: #4DB33D;
    height: 50px;
`

const RaspberryPiImg = styled(RaspberryPi)`
    color: #C51A4A;
    height: 50px;
`

const Html5Img = styled(Html5)`
    color: #e34c26;
    height: 50px;
`

const golangImg = <GolangImg />
const reactImg = <ReactLogoImg />;
const pythonImg = <LogoPythonImg />;
const raspImg = <RaspberryPiImg />;
const htmlImg = <Html5Img />;
const tailwindImg = null;
const typeScriptImg = <TypescriptImg />;
const mongoImg = <MongodbImg />

const totalProjects = [{
    _id: 1,
    img: <Image alt='test' src={test} />,
    name: 'Bug tracker',
    description: `A Ticketing system capable of tracking bugs and progress across multiple software engineering projects. Users can be assinged to multiple project areas by system admins. Created using Typescript, React and Golang`,
    tags: [typeScriptImg, reactImg, golangImg],
    git: 'https://github.com/RhysHalpin-dev/bug-tracker',
    preview: ''
}, {
    _id: 2,
    img: <Image alt='test' src={test} />,
    name: 'Covid entry/exit system with monitoring web portal',
    description: `Attendance system capable of measuring the users temperature for granting or rejecting entry based on covid temprature thresholds. web app integration for activity
        logging, monitring and admin capabilties `,
    tags: [htmlImg, reactImg, pythonImg, raspImg, mongoImg],
    git: 'https://github.com/RhysHalpin-dev',
    preview: ''
}, {
    _id: 3,
    img: <Image alt='test' src={test} />,
    name: 'This site :D',
    description: 'This Front-end portfolio site developed using Next JS and styled components featuring dark mode accessibility and Résumé',
    tags: [htmlImg, reactImg, tailwindImg],
    git: 'https://github.com/RhysHalpin-dev',
    preview: ''
}, {
    _id: 4,
    img: <Image alt='test' src={test} />,
    name: 'online IDE',
    description: `Online code compiler and commenter created using Typescript alongside React. 
    Basic code can be compiled and viewed within the browser using ecmascript 6, future language support TBD`,
    tags: [reactImg, typeScriptImg],
    git: 'https://github.com/RhysHalpin-dev',
    preview: ''
}, {
    _id: 5,
    img: <Image alt='test' src={test} />,
    name: 'Covid entry/exit system with monitoring web portal',
    description: `Attendance system capable of measuring the users temprature for granting or rejecting entry based on covid temprature thresholds. web app integration for activity
        logging, monitring and admin capabilties `,
    tags: [htmlImg, reactImg, pythonImg, raspImg],
    git: 'https://github.com/RhysHalpin-dev',
    preview: ''
}]

export { totalProjects }