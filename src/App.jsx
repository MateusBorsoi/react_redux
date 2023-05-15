import "./App.css";
import Card from "./components/Card";
import Intervalo from "./components/Intervalo";

function App() {
  return (
    <div className="App">
      <h1>React + Redux</h1>
      <div className="Linha">
        <Intervalo/>
      </div>
      <div className="Linha">
        <Card title="Card 2" Green>
          A
        </Card>
        <Card title="Card 3" Blue>
          A
        </Card>
        <Card title="Card 4" Purple>
          A
        </Card>
      </div>
    </div>
  );
}

export default App;
