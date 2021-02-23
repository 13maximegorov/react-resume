import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'
import Section from '../Section/Section'
import Grid from '../Grid/Grid'
import ProfileImg from '../../images/profile.jpg'
import './Home.css'

const home = cn('home')

const Home = () => {
  const addressItems = [
    {id: 1, icon: 'map', title: 'Россия, Уфа'},
    {id: 2, icon: 'envelope', title: '13maximegorov@gmail.com'},
    {id: 3, icon: 'phone', title: '+7 919 155 05 84'},
  ]

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
            {addressItems.map(item =>
              <span className={home('information')} key={item.id}>
                <i className={classnames('bx', `bx-${item.icon}`, home('icon'))}></i>{item.title}
              </span>
            )}
          </Grid>
        </Grid>
      </Section>
    </div>
  )
}

export default Home
