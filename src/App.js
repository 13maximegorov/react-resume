import {useEffect} from 'react'
import cn from './utils/cn'
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'
import './App.css'

const app = cn('app')

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme-icon', 'sun')
      document.body.classList.add('dark-theme')
    } else {
      localStorage.setItem('theme-icon', 'moon')
      document.body.classList.remove('dark-theme')
    }
  }, [])

  return (
    <div className={app()}>
      <Header />
      <Resume />
    </div>
  )
}

export default App
