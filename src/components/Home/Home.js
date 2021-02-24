import {useState, useEffect} from 'react'
import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'
import Section from '../Section/Section'
import Grid from '../Grid/Grid'
import ProfileImg from '../../images/profile.jpg'
import './Home.css'

const home = cn('home')

const Home = () => {
  const addressItems = [
    {icon: 'map', title: 'Россия, Уфа'},
    {icon: 'envelope', title: '13maximegorov@gmail.com'},
    {icon: 'phone', title: '+7 919 155 05 84'},
  ]

  const [themeIcon, setThemeIcon] = useState('moon')

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme')
      setThemeIcon('sun')
    }
  }, [])

  const changeTheme = () => {
    document.body.classList.toggle('dark-theme')

    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark')
      setThemeIcon('sun')
    } else {
      localStorage.setItem('theme', 'light')
      setThemeIcon('moon')
    }
  }

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
            {addressItems.map((item, index) =>
              <span className={home('information')} key={index}>
                <i className={classnames('bx', `bx-${item.icon}`, home('icon'))}></i>{item.title}
              </span>
            )}
          </Grid>
        </Grid>

        <i className={classnames(`bx bx-${themeIcon} change-theme`)} title="Переключить тему" onClick={changeTheme}></i>

        <i className="bx bx-download download" title="Загрузить резюме"></i>
      </Section>
    </div>
  )
}

export default Home
