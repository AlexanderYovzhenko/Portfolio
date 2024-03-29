import FancyWeather from '../assets/FancyWeather.jpg'
import Vezha from '../assets/Vezha.jpg'
import ChatOnSocket from '../assets/ChatOnSocket.jpg'
import RaindropsGame from '../assets/RaindropsGame.jpg'
import CurrencyConverter from '../assets/CurrencyConverter.jpg'
import LayoutFurnitureForHome from '../assets/LayoutFurnitureForHome.jpg'
import API_BackEnd from '../assets/API_BackEnd.jpg'

const projects = [
  {
    name: 'Vezha',
    deploy: 'https://alexanderyovzhenko.github.io/project-management-app/',
    screenshot: Vezha,
    gitHub: 'https://github.com/alexanderyovzhenko/project-management-app',
    description: {
      Description: 'DescriptionVezha',
      Languages: 'TypeScript, React, NodeJS',
      Technologies: 'Redux, Sass, Formik, NestJS, JWT, PostgreSQL, TypeORM',
      Instruments: 'Visual Studio Code, Chrome tools, Git, WebPack, ESLint, Prettier',
      Position: 'FullStackDev',
      Role: 'RoleVezha',
      GitHubFrontEnd: 'https://github.com/alexanderyovzhenko/project-management-app',
      GitHubBackEnd: 'https://github.com/alexanderyovzhenko/Vezha_BackEnd',
    },
  },
  {
    name: 'Chat on Socket',
    deploy: 'https://chat-client-fawn.vercel.app',
    screenshot: ChatOnSocket,
    gitHub: 'https://github.com/alexanderyovzhenko/Chat',
    description: {
      Description: 'DescriptionCS',
      Languages: 'TypeScript, NodeJS, Fastify, React, WebSocket',
      Technologies: 'WebSocket',
      Instruments: 'Visual Studio Code, Chrome tools, Git',
      Position: 'FullStackDev',
      Role: 'RoleFull',
    },
  },
  {
    name: 'Raindrops Game',
    deploy: 'https://alexanderyovzhenko.github.io/rsschool-cv/',
    screenshot: RaindropsGame,
    gitHub: 'https://github.com/alexanderyovzhenko/rsschool-cv/tree/raindrops',
    description: {
      Description: 'DescriptionRG',
      Languages: 'JavaScript',
      Technologies: 'HTML, CSS',
      Instruments: 'Visual Studio Code, Chrome tools, Git',
      Position: 'FrontEndDev',
      Role: 'RoleFull',
    },
  },
  {
    name: 'Fancy Weather',
    deploy: 'https://alexanderyovzhenko.github.io/Fancy_Weather',
    screenshot: FancyWeather,
    gitHub: 'https://github.com/alexanderyovzhenko/Fancy_Weather',
    description: {
      Description: 'DescriptionFW',
      Languages: 'JavaScript',
      Technologies: 'HTML, CSS, Sass',
      Instruments: 'Visual Studio Code, Chrome tools, Git, WebPack, ESLint',
      Position: 'FrontEndDev',
      Role: 'RoleFull',
    },
  },
  {
    name: 'Currency Converter',
    deploy: 'https://alexanderyovzhenko.github.io/Currency_Converter',
    screenshot: CurrencyConverter,
    gitHub: 'https://github.com/alexanderyovzhenko/Currency_Converter',
    description: {
      Description: 'DescriptionCC',
      Languages: 'JavaScript, React, Redux, RTK, React-Router, Axios',
      Technologies: 'HTML, CSS, SCSS',
      Instruments: 'Visual Studio Code, Chrome tools, Git',
      Position: 'FrontEndDev',
      Role: 'RoleFull',
    },
  },
  {
    name: 'Furniture of Home',
    deploy: 'https://alexanderyovzhenko.github.io/Layout_Furniture_for_home/',
    screenshot: LayoutFurnitureForHome,
    gitHub: 'https://github.com/alexanderyovzhenko/Layout_Furniture_for_home',
    description: {
      Description: 'DescriptionFH',
      Languages: 'JavaScript',
      Technologies: 'Prepros, HTML, SCSS',
      Instruments: 'Visual Studio Code, Chrome tools, Git',
      Position: 'FrontEndDev',
      Role: 'RoleFull',
    },
  },
  {
    name: 'API To Do',
    deploy: 'https://woman-up-task.vercel.app',
    screenshot: API_BackEnd,
    gitHub: 'https://github.com/alexanderyovzhenko/WomanUP_Task',
    description: {
      Description: 'DescriptionAT',
      Languages: 'JavaScript, NodeJS, Express',
      Technologies: 'Mongoose, Bcrypt, Jsonwebtoken, Eslint',
      Instruments: 'Visual Studio Code, Git',
      Position: 'BackEndDev',
      Role: 'RoleFull',
    },
  },
  {
    name: 'API Films',
    deploy: 'https://github.com/alexanderyovzhenko/API_BackEnd',
    screenshot: API_BackEnd,
    gitHub: 'https://github.com/alexanderyovzhenko/API_BackEnd',
    description: {
      Description: 'DescriptionAF',
      Languages: 'TypeScript, NodeJS, NestJS',
      Technologies:
        'Monorepo, Microservices, RabbitMQ, Postgres, Sequelize, Winston, JWT, Bcrypt, Eslint',
      Instruments: 'Visual Studio Code, Git, Rabbit Manager, Pq Admin',
      Position: 'BackEndDev',
      Role: 'RoleFull',
    },
  },
  {
    name: 'Microservices gRPC',
    deploy: 'https://github.com/alexanderyovzhenko/Node_Microservices_gRPC',
    screenshot: API_BackEnd,
    gitHub: 'https://github.com/alexanderyovzhenko/Node_Microservices_gRPC',
    description: {
      Description: 'DescriptionAG',
      Languages: 'JavaScript, NodeJS, Fastify',
      Technologies: 'Microservices, gRPC, Nodemon',
      Instruments: 'Visual Studio Code, Git',
      Position: 'BackEndDev',
      Role: 'RoleFull',
    },
  },
]

export default projects
