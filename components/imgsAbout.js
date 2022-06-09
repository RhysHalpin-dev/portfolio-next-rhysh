import styled from 'styled-components'

import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { LogoPython } from '@styled-icons/ionicons-solid/LogoPython'
import { Mongodb } from '@styled-icons/simple-icons/Mongodb'
import { RaspberryPi } from '@styled-icons/fa-brands/RaspberryPi'
import { Html5 } from '@styled-icons/typicons/Html5'
import { Goland } from '@styled-icons/simple-icons/Goland'
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs'
import { Mysql } from '@styled-icons/simple-icons/Mysql'
import { Aws } from '@styled-icons/boxicons-logos/Aws'
import { Git } from '@styled-icons/boxicons-logos/Git'


const NodejsImg = styled(Nodejs)`
    height: 30px;
    width: 30px;
    color: #44883e;
`

const AwsImg = styled(Aws)`
    height: 30px;
    width: 30px;
    color: #FF9900;
`
const GitImg = styled(Git)`
    height: 30px;
    width: 30px;
    color: #F1502F;
`
const TypescriptImg = styled(Typescript)`
    color: #007acc;
    background-color: #ffffff;
    height: 30px;
    width: 30px;
`

const GolangImg = styled(Goland)`

background-color: #01ADD8;
color:${({ theme }) => theme.mainBackground};
    height: 30px;
    width: 30px;
`
const ReactLogoImg = styled(ReactLogo)`
    color:#61DBFB;
    height: 30px;
    width: 30px;
`

const LogoPythonImg = styled(LogoPython)`
    height: 30px;
    width: 30px;

`
const MongodbImg = styled(Mongodb)`
    color: #4DB33D;
    height: 30px;
    width: 30px
`
const MysqlImg = styled(Mysql)`
    height: 30px;
    width: 30px
`

const RaspberryPiImg = styled(RaspberryPi)`
    color: #C51A4A;
    height: 30px;
    width: 30px
`

const Html5Img = styled(Html5)`
    color: #e34c26;
    height: 30px;
    width: 30px
`

export { TypescriptImg, GolangImg, ReactLogoImg, LogoPythonImg, MongodbImg, RaspberryPiImg, Html5Img, NodejsImg, MysqlImg, AwsImg, GitImg };