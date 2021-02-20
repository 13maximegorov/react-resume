import cn from '../../utils/cn'
import Container from '../Container/Container'
import Home from '../Home/Home'
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
          </div>
          <div className={resume('right')}></div>
        </div>
      </Container>
    </div>
  )
}

export default Resume
