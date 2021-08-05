import { Switch, Route} from 'react-router-dom'
import Clinica from './Pages/Clinica/Clinica'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/clinica' component={Clinica}/>
        
        <Route exact path='/:user?' component={Home}/>
        <Route exact path='/:user?/:id?' component={Home}/>
      </Switch>
    </>
  )
}

export default App
