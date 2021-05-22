import './App.css';
import {useEffect} from 'react'
import SignUpAndLogin from './SignUpAndLogin'
import Dashboard from './Dashboard'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store';

import {loadUser} from "./actions/actions"
import setAuthtoken from './utils/setAuthToken'
function App() {
  

  useEffect(() => store.dispatch(loadUser()), [])
  

  if (localStorage.token) {
      setAuthtoken(localStorage.token)
  }
  return (
    <div className="App">
    <Provider store={store}>

    
  <Router>
   
  <Switch>
    
    <Route exact path="/" component={SignUpAndLogin} />
    <Route exact path="/dashboard" component={Dashboard} />

  </Switch>




  </Router>
  </Provider>
    </div>
  );
}

export default App;
