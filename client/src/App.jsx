import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Statistics from './views/Statistics';
import Calendar from './views/Calendar';
import Signup from './views/Signup';
import Login from './views/Login';
import TotalCounter from './views/TotalCounter';
import IndividualStatistics from './views/IndividualStatistics';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loaded: false
    };
  }

  handleAuthenticationChange = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/statistics" component={Statistics} exact />
          <Route
            path="/individual-statistics"
            component={IndividualStatistics}
            exact
          />
          <Route path="/counter" component={TotalCounter} exact />
          <Route path="/calendar" component={Calendar} exact />
          <Route
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                onAuthenticationChange={this.handleAuthenticationChange}
              />
            )}
            exact
          />
          <Route path="/login" component={Login} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
