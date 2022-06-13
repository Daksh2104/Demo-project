import React, {lazy} from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SigninPage from './pages/SigninPage'
import NotFoundPage from './pages/NotFoundPage'
const SignupPage = lazy(()=>import("./pages/SignupPage"));
const BrowsePage = lazy(()=>import("./pages/BrowsePage"));


/*---> Component <---*/
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/signin'>
          <SigninPage />
        </Route>
        <Route path='/signup'>
          <SignupPage />
        </Route>
        <Route path='/browse'>
          <BrowsePage />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
