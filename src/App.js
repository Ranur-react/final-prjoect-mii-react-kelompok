import logo from "./logo.svg";
import "./App.css";
import Porto from "./pages/Porto";
import PortoMember from "./pages/PortoMember";

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Porto />
      <PortoMember />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
