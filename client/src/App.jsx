import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Statistics from './views/Statistics';
import Calendar from './views/Calendar';
import Signup from './views/Signup';
import Login from './views/Login';
import TotalCounter from './views/TotalCounter';

function App() {
  return (
    <div className="App">
      <h2>Froggy App</h2>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/statistics" component={Statistics} exact />
          <Route path="/counter" component={TotalCounter} exact />
          <Route path="/calendar" component={Calendar} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
