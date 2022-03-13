import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import CounterOne from './useReducer/useReducerDemo';
import CounterTwo from './useReducer/CounterTwo';


function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Switch>
          <Route path="/checkout">

            <Checkout/>
          </Route>
          <Route path="/counter">
            <CounterTwo/>
            <CounterOne/>
          </Route>
          <Route path="/">
          
            <Home/>
          </Route>
        </Switch>
          
      
      </div>
    </Router>
    
  );
}

export default App;
