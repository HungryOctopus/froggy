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
import { signOut, loadAuthenticatedUser } from './services/authentication';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loaded: false
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    loadAuthenticatedUser()
      .then((user) => {
        if (user) {
          this.setState({ user });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ loaded: true });
      });
  };

  handleAuthenticationChange = (user) => {
    this.setState({ user });
  };

  handleSignOut = () => {
    signOut().then(() => {
      this.setState({ user: null });
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar user={this.state.user} onSignOut={this.handleSignOut} />
        <Switch>
          <Route path="/statistics" component={Statistics} exact />
          <Route
            path="/individual-statistics"
            component={IndividualStatistics}
            exact
          />
          <Route path="/counter" component={TotalCounter} exact />
          <Route path="/calendar" component={Calendar} exact />
          <ProtectedRoute
            path="/signup"
            authorized={!this.state.loaded || !this.state.user}
            redirect="/counter"
            render={(props) => (
              <Signup
                {...props}
                onAuthenticationChange={this.handleAuthenticationChange}
              />
            )}
            exact
          />
          <ProtectedRoute
            path="/login"
            authorized={!this.state.loaded || !this.state.user}
            redirect="/counter"
            render={(props) => (
              <Login
                {...props}
                onAuthenticationChange={this.handleAuthenticationChange}
              />
            )}
            exact
          />
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
