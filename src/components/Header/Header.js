import {useState} from 'react'
import {classnames} from '@bem-react/classnames'
import cn from '../../utils/cn'
import Container from '../Container/Container'
import './Header.css'

const header = cn('header')
const nav = cn('nav')

const Header = () => {
  const navItems = [
    {href: '#home', icon: 'home', title: 'Главная'},
    {href: '#social', icon: 'message', title: 'Социальные сети'},
    {href: '#profile', icon: 'user', title: 'Профиль'},
    {href: '#education', icon: 'book', title: 'Образование'},
    {href: '#skills', icon: 'receipt', title: 'Навыки'},
    {href: '#experience', icon: 'briefcase-alt', title: 'Опыт работы'},
    {href: '#certificates', icon: 'award', title: 'Сертификаты и дипломы'},
    {href: '#languages', icon: 'font', title: 'Владение языками'},
    {href: '#interests', icon: 'dice-5', title: 'Интересы'},
  ]

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  const clickNavLink = () => setShowMenu(false)

  return (
    <div className={header()}>
      <Container>
        <div className={nav()}>
          <a href="#" className={nav('logo')}>Maxim Egorov</a>

          <div className={nav('menu', {show: showMenu})}>
            <ul className={nav('list')}>
              {navItems.map((item, index) =>
                <li className={nav('item')} key={index}>
                  <a href={item.href} className={nav('link')} onClick={clickNavLink}>
                    <i className={classnames('bx', `bx-${item.icon}`, nav('icon'))}></i>
                    {item.title}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className={nav('toggle')} onClick={toggleMenu}>
            <i className='bx bx-grid-alt'></i>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
