import test from '../imgs/test.png'
import bug from '../imgs/bug.jpg'
import covid from '../imgs/covid.png'
import portfolio from '../imgs/portfolio.png'
import styled from 'styled-components'
import Image from 'next/image'
import { TypescriptImg, GolangImg, ReactLogoImg, LogoPythonImg, MongodbImg, RaspberryPiImg, Html5Img, PhpImg } from '../components/imgsProjects'

const golangImg = <GolangImg />
const reactImg = <ReactLogoImg />;
const pythonImg = <LogoPythonImg />;
const raspImg = <RaspberryPiImg />;
const htmlImg = <Html5Img />;
const typeScriptImg = <TypescriptImg />;
const mongoImg = <MongodbImg />
const phpImg = <PhpImg />

const totalProjects = [{
    _id: 1,
    img: <Image alt='test' src={bug} />,
    name: 'Bug tracker',
    description: `A Ticketing system capable of tracking bugs and progress across multiple software engineering projects. Users can be assinged to multiple project areas by system admins. Created using Typescript, React and Golang`,
    tags: [typeScriptImg, reactImg, golangImg],
    git: 'https://github.com/RhysHalpin-dev/bug-tracker',
    preview: '',
    dev: true
}, {
    _id: 2,
    img: <Image alt='test' src={covid} />,
    name: 'Covid entry/exit system with monitoring web portal',
    description: `Attendance system capable of measuring the users temperature for granting or rejecting entry based on covid temprature thresholds. web app integration for activity
        logging, monitring and admin capabilties `,
    tags: [htmlImg, reactImg, pythonImg, raspImg, mongoImg],
    git: 'https://github.com/RhysHalpin-dev',
    preview: 'https://covid-clock-system.netlify.app/',
    dev: false
}, {
    _id: 3,
    img: <Image alt='test' src={portfolio} />,
    name: 'This site :D',
    description: 'This Front-end portfolio site developed using Next JS and styled components featuring dark mode accessibility and Résumé',
    tags: [htmlImg, reactImg],
    git: 'https://github.com/RhysHalpin-dev',
    preview: '',
    dev: null
}, /*{
    _id: 4,
    img: <Image alt='test' src={test} />,
    name: 'online IDE',
    description: `Online code compiler and commenter created using Typescript alongside React. 
    Basic code can be compiled and viewed within the browser using ecmascript 6, future language support TBD`,
    tags: [reactImg, typeScriptImg],
    git: 'https://github.com/RhysHalpin-dev',
    preview: ''
},*/ {
    _id: 4,
    img: <Image alt='test' src={test} />,
    name: 'Academic Conference App',
    description: `Web application, presenting information about an academic conference including Schedule, content and Authors attending the . Consists of a web API created using PHP and a Front end React JS application. SQlite`,
    tags: [reactImg, phpImg],
    git: 'https://github.com/RhysHalpin-dev/KF6012-web-app',
    preview: 'http://unn-w15020067.newnumyspace.co.uk/KF6012/part2/',
    dev: null
}]

export { totalProjects }