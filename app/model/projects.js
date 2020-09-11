export const projects = [
  {
    title: 'ATX Voice',
    image: '',
    links: {
      website:'www.atxvoice.com',
      github:'https://github.com/avckiran/atxvoice',
      linkedin:''
    },
    summary: 'The idea behind ATX Voice is to create a common forum for people in the city of Austin along with providing various details such as events, latest tweets etc. I would personally like to expand this to make it a place where tech people can connect with each other and discuss trends, issues over a cup of virtual coffee. This project is in very early stage',
    details: [
      'Tech Stack: React + Redux (Frontend), NodeJS (backend), MongoDB database',
      'REST API backend with NodeJS with Express',
      'Authentication using JWT',
      'External data from Twitter, DarkSky and Eventbrite',
      'WSIWYG editor Quill.js',
      'State management with hooks and app level state managed by Redux store and thunks',
      'Responsiveness using bootstrap grid'
    ]
  },
  {
    title: 'This Website (www.kiranachanta.com)',
    image: '',
    links: {
      website:'www.kiranachanta.com',
      github:'https://github.com/avckiran/personal-website',
      linkedin:''
    },
    summary: 'The goal of this website is to provide relevant information for recruiters and potential hiring managers about my skillset, experience and other interests. This current website is created using React 16.xx and made as light as possible (so no create-react-app). No testing framework installed, custom webpack configuration with babel. Data is maintained in JS objects and got into the project wherever needed. Future plan is to treat this website as a playground to learn various web and backend technologies',
    details: [
      'Tech Stack: React mostly',
      'Responsiveness using react-bootstrap library',
      'Original theme and design to make it minimalist',
      'Future updates planned: connect to my goodreads, linkedin, github accounts to get all my data at one place'
    ]
  },
  {
    title: 'Dev Connector',
    image: '',
    links: {
      website:'https://infinite-mesa-25051.herokuapp.com/',
      github:'https://github.com/austinbirds/devconnector',
      linkedin:''
    },
    summary: 'This project is completed in early days learning React+Redux stack. This is a fictious social-media platform (kind of) to let the developers connect. You can have profile, post, comment etc.',
    details: [
      'Tech Stack: React + Redux, NodeJS, MongoDB',
      'Backend is a RESTful API using NodeJS and Express framework',
      'Functional components used with Hooks to maintain component level state',
      'App level state is maintained by Redux store',
      'All basic CRUD operations are created',
    ]

  }

]