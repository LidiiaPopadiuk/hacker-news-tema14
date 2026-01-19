import { HackerNews } from "./components/HackerNews";
import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HackerNews />
      </div>
    );
  }
}

export default App;
