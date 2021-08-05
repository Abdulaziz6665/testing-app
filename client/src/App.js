import { Switch, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/:user?' component={Home}/>
        <Route exact path='/:user?/:id?' component={Home}/>
      </Switch>
    </>
  )
}

export default App
