import styled from 'styled-components'

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
  height: 3rem;
`
const GolangImg = styled(Goland)`
    height: 3rem;
    background-color: #01ADD8;
    color:${({ theme }) => theme.mainBackground};
    background-color: #01ADD8;

`
const ReactLogoImg = styled(ReactLogo)`
    color:#61DBFB;
    height: 3rem;
`

const LogoPythonImg = styled(LogoPython)`
    height: 3rem;

`
const MongodbImg = styled(Mongodb)`
    color: #4DB33D;
    height: 3rem;
`

const RaspberryPiImg = styled(RaspberryPi)`
    color: #C51A4A;
    height: 3rem;
`

const Html5Img = styled(Html5)`
    color: #e34c26;
    height: 3rem;
`

export { TypescriptImg, GolangImg, ReactLogoImg, LogoPythonImg, MongodbImg, RaspberryPiImg, Html5Img, };