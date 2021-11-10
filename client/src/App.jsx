import "./App.scss";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Statistics from "./views/Statistics";

function App() {
  return (
    <div className="App">
      <h2>Froggy App</h2>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/statistics" component={Statistics} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
