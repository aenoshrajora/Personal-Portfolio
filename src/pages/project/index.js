import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'
import {
  sentimentAnalyzer,
  google_clone,
  OnlineFoodWebApp,
  OnlineCodeEditor,
  restCOuntry,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'Sentiment Analyzer ',
    desc:
      'Using Streamlit and ML to create a sentiment analyzer based on text analyses',
    stack: 'Streamlit Machine Learning',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/aenoshrajora/Sentiment-Analyzer-With-Text',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://aenoshrajora-sentiment-analyzer-with--sentiment-analyzer-ywnk9c.streamlit.app/',
    },
    imgUrl: sentimentAnalyzer,
  },
  {
    id: 2,
    name: 'Google Clone',
    desc: 'Google Clone with react js ',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/aenoshrajora/google_clone_2.0',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://googl2.netlify.app/',
    },
    imgUrl: google_clone,
  },
  {
    id: 3,
    name: 'Online Food Web',
    desc: 'This is an amazing project with cool UI interface',
    stack: 'React JS',
    imgUrl: OnlineFoodWebApp,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/aenoshrajora/Online-Food-Web-App',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://aenoshrajora.github.io/Online-Food-Web-App/',
    },
  },
  {
    id: 4,
    name: 'Online Code Editor ',
    desc: 'Created Online code editor that resides on a remote server and is accessible via browsers.',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/aenoshrajora/Online-Code-Editor-React',
    },
    website: {
      icon: <TbWorld />,
      url: 'http://online-code-editor-react-opal.vercel.app/',
    },
    imgUrl: OnlineCodeEditor,
   },

  
]
