import React from 'react'
import  { BrowserRouter as Router, Route} from 'react-router-dom'
import Card from './component/screen/Card'
import Login from './component/screen/Login'
import Register from './component/screen/Register'
import Profile from './component/screen/Profile'
import Formengineer from './component/screen/Formengineer'
import Formcompany from './component/screen/Formcompany'


class App extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path ={'/'} component={Card}/>
        <Route  path ={'/login'} component={Login}/>
        <Route  path ={'/register'} component={Register}/>
        <Route  path ={'/profile'} component={Profile}/>
        <Route  path ={'/formengineer'} component={Formengineer}/>
        <Route  path ={'/formcompany'} component={Formcompany}/>
      </Router>

    )
  }
}

export default App
