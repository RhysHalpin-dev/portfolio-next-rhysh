import styled from 'styled-components'

import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { LogoPython } from '@styled-icons/ionicons-solid/LogoPython'
import { Mongodb } from '@styled-icons/simple-icons/Mongodb'
import { RaspberryPi } from '@styled-icons/fa-brands/RaspberryPi'
import { Html5 } from '@styled-icons/typicons/Html5'
import { Goland } from '@styled-icons/simple-icons/Goland'
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs'


const NodejsImg = styled(Nodejs)`
    height: 50px;
`
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

export { TypescriptImg, GolangImg, ReactLogoImg, LogoPythonImg, MongodbImg, RaspberryPiImg, Html5Img, };