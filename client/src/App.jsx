import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Users from "./views/Users";
import Calendar from "./views/Calendar";
import Signup from "./views/Signup";
import Login from "./views/Login";
import TotalCounter from "./views/TotalCounter";
import Statistics from "./views/Statistics";
import Footer from "./components/Footer";
import Contact from "./views/Contact";
import About from "./views/About";
import { Component } from "react";
import { signOut, loadAuthenticatedUser } from "./services/authentication";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminMessaging from "./views/AdminMessaging";
import Settings from "./views/Settings";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loaded: false,
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
          <ProtectedRoute
            path="/adminmessaging"
            redirect="/signup"
            authorized={!this.state.loaded || this.state.user}
            component={AdminMessaging}
            exact
          />
          <ProtectedRoute
            path="/users"
            redirect="/signup"
            authorized={!this.state.loaded || this.state.user}
            render={(props) => <Users {...props} user={this.state.user} />}
            exact
          />
          <ProtectedRoute
            path="/statistics"
            redirect="/signup"
            authorized={!this.state.loaded || this.state.user}
            render={(props) => <Statistics {...props} user={this.state.user} />}
            exact
          />
          <ProtectedRoute
            path="/counter"
            redirect="/signup"
            authorized={!this.state.loaded || this.state.user}
            component={TotalCounter}
            exact
          />
          <ProtectedRoute
            path="/calendar"
            redirect="/signup"
            authorized={!this.state.loaded || this.state.user}
            component={Calendar}
            exact
          />
          <ProtectedRoute
            path="/settings"
            redirect="/signup"
            authorized={!this.state.loaded || this.state.user}
            render={(props) => (
              <Settings
                {...props}
                onAuthenticationChange={this.handleAuthenticationChange}
                user={this.state.user}
              />
            )}
            exact
          />
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
          <Route path="/contact" component={Contact} exact />
          <Route path="/about" component={About} exact />
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
