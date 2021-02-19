import cn from './utils/cn'
import 'boxicons'
import Header from './components/Header/Header'
import './App.css'

const app = cn('app')

const App = () => {
  return (
    <div className={app()}>
      <Header />
    </div>
  )
}

export default App
