import "./App.scss";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Froggy App</h2>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
