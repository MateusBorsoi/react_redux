import "./App.css";
import Card from "./components/Card";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  return (
    <div className="App">
      <h1>React + Redux</h1>
      <div className="Linha">
        <Intervalo />
      </div>
      <div className="Linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
