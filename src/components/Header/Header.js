import {useState} from 'react'
import {classnames} from '@bem-react/classnames'
import cn from '../../utils/cn'
import Container from '../Container/Container'
import './Header.css'

const header = cn('header')
const nav = cn('nav')

const Header = () => {
  const navItems = [
    {id: 1, href: '#home', icon: 'home', title: 'Главная'},
    {id: 1, href: '#social', icon: 'message', title: 'Социальные сети'},
    {id: 2, href: '#profile', icon: 'user', title: 'Профиль'},
    {id: 3, href: '#education', icon: 'book', title: 'Образование'},
    {id: 4, href: '#skills', icon: 'receipt', title: 'Навыки'},
    {id: 5, href: '#experience', icon: 'briefcase-alt', title: 'Опыт работы'},
    {id: 6, href: '#certificates', icon: 'award', title: 'Сертификаты и дипломы'},
    {id: 7, href: '#languages', icon: 'font', title: 'Владение языками'},
    {id: 8, href: '#interests', icon: 'dice-5', title: 'Интересы'},
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
              {navItems.map(item =>
                <li className={nav('item')} key={item.id}>
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
