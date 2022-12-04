import React from 'react'

// react icons
import { FiGrid, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { VscProject } from 'react-icons/vsc'
import {
  BsPersonLinesFill,
  BsGithub,
  BsGoogle,
} from 'react-icons/bs'
import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import { SiKalilinux,SiFlutter} from 'react-icons/si'
import { 
  FaPython,
  FaJava,
  FaCss3,
  FaLinux,
} from 'react-icons/fa';
import { TbBrandKotlin } from 'react-icons/tb'
import { GrGithub, GrTwitter, GrInstagram } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiFirebase } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaNodeJs, FaGit } from 'react-icons/fa'

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'Projects',
    icon: <VscProject className="link-icon" />,
    url: '/project',
  },
  {
    text: 'Contacts',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },

]
// social media icons and url
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/aenoshrajora ',
  },
  {
    icon: <FiYoutube className="icon switch__color" />,
    url: 'https://www.youtube.com/channel/UC0fNEeLUzc2tVHx589jGP8Q',
  },
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: 'https://twitter.com/AenoshR',
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: 'https://www.instagram.com/aenoshr/',
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'www.linkedin.com/in/aenosh-rajora',
  },
]
// programming lanuages (spanText), icons and url
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <FaCss3 className="skills-icon switch__color" />,
    spanText: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  }, 
  {
    icon: <FaPython className="skills-icon switch__color" />,
    spanText: 'Python',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <FaJava className="skills-icon switch__color" />,
    spanText: 'Java',
    url: 'java.org',
  },

  {
    icon: <SiKalilinux className="skills-icon switch__color" />,
    spanText: 'Kali Linux',
    url: 'https://kali.org',
  },

  {
    icon: <FaLinux className="skills-icon switch__color" />,
    spanText: 'Linux',
    url: 'https://linux.org',
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'Git',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: 'Github',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'React js',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'Node',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
  },

  {
    icon: <TbBrandKotlin className="skills-icon switch__color" />,
    spanText: 'Kotlin',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
  },
  {
    icon: <SiFlutter className="skills-icon switch__color" />,
    spanText: 'Flutter',
    url: 'https://redux.js.org/introduction/getting-started',
  },

  {
    icon: <BsGoogle className="skills-icon switch__color" />,
    spanText: 'Googling',
    url: 'https://google.com',
  },
  {
    icon: <DiFirebase className="skills-icon switch__color"/>,
    spanText: 'Firebase',
    url: 'https://firebase.google.com ',
  }
]

export { sideBarMenu, socialIcons, skillSet }
