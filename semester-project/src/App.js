
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
        
        <Route path="/login" component={Login}/>
        <Route path="/checkout">
          <Header/>
          </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
        
    </Switch>
      
    </div>
    </Router>
  );
}

export default App;
