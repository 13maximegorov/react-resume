import {useState, useEffect} from 'react'
import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'
import './ScrollButton.css'

const scrollButton = cn('scroll-button')

const ScrollButton = () => {

  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])

  const onScroll = () => {
    if (window.scrollY >= 200) {
      setShowScrollButton(true)
    } else {
      setShowScrollButton(false)
    }
  }

  return (
    <a href="#" className={scrollButton({show: showScrollButton})}>
      <i className={classnames('bx bx-up-arrow-alt', scrollButton('icon'))}></i>
    </a>
  )
}

export default ScrollButton
