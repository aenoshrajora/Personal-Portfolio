import React from 'react'
import myCV from '../../assets/images/MyCV.pdf'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

// components
import { Cards, Blast } from '../../components'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  'A',
                  'b',
                  'o',
                  'u',
                  't',
                  '',
                  '&',
                  '',
                  'S',
                  'k',
                  'i',
                  'l',
                  'l',
                  's',
                ]}
                indexLetter={15}
              />
            </h2>
            <Fade bottom>
              <p>
                I’m an ambitious Penetration Tester who's passionate about
                hacking and coding  for a role in the established IT company with
                the opportunity to work as a security analyst.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I’m from Indian and currently living in India. I’m a
                 Penetration Tester who loves testing for vulnerabilities and  building cool UI effects, dynamic webpages
                with amazing animations and creating intuitive, dynamic user
                experiences. I also love to reach out to new opportunities
                across the globe that will enhance my skills and get the
                opportunity to work with other Hackers as well
              </p>
            </Fade>
            <Fade bottom>
              <p>
                If I could say one of the most interesting things about me, it's
                the fact that I'm always ready for any challenges that comes to
                my way. Here's my CV below for more details.
              </p>
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: '2rem' }}
                href={myCV}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
            </Fade>
          </div>
        </article>
        {/* programming language cards */}
        <Cards />
      </div>
    </>
  )
}

export default About
