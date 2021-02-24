import cn from '../../utils/cn'
import Container from '../Container/Container'
import Home from '../Home/Home'
import Social from '../Social/Social'
import Profile from '../Profile/Profile'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Certificate from '../Certificate/Certificate'
import './Resume.css'

const main = cn('main')
const resume = cn('resume')

const Resume = () => {
  return (
    <div className={main()}>
      <Container>
        <div className={resume()}>
          <div className={resume('left')}>
            <Home />
            <Social />
            <Profile />
            <Education />
            <Skills />
          </div>
          <div className={resume('right')}>
            <Experience />
            <Certificate />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Resume
