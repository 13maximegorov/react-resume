import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'
import Section from '../Section/Section'
import Grid from '../Grid/Grid'
import ProfileImg from '../../images/profile.jpg'
import './Home.css'

const home = cn('home')

const Home = () => {
  return (
    <div className={home()} id="home">
      <Section>
        <Grid className={home('container')}>
          <Grid className={home('data')}>
            <img src={ProfileImg} alt="profile" className={home('img')}/>

            <h1 className={home('title')}>Максим <b>Егоров</b></h1>
            <h3 className={home('profession')}>Frontend-разработчик / Backend-разработчик</h3>

            <div>
              <a href="#" className={home('button-mobile')}>Загрузить резюме</a>
            </div>
          </Grid>

          <Grid className={home('address')}>
            <span className={home('information')}>
              <i className={classnames('bx bx-map', home('icon'))}></i>Россия, Уфа
            </span>
            <span className={home('information')}>
              <i className={classnames('bx bx-envelope', home('icon'))}></i>13maximegorov@gmail.com
            </span>
            <span className={home('information')}>
              <i className={classnames('bx bx-phone', home('icon'))}></i>+7 919 155 05 84
            </span>
          </Grid>
        </Grid>
      </Section>
    </div>
  )
}

export default Home
