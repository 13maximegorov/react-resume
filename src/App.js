import cn from './utils/cn'
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'
import ScrollButton from './components/ScrollButton/ScrollButton'
import './App.css'

const app = cn('app')

const App = () => {
  return (
    <div className={app()}>
      <Header />
      <Resume />
      <ScrollButton />
    </div>
  )
}

export default App
