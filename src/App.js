import cn from './utils/cn'
import 'boxicons'
import './App.css'

const app = cn('app')

const App = () => {
  return (
    <div className={app()}>
      <h1>React</h1>
    </div>
  )
}

export default App
