import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>React + Redux</h1>
      <div className="Linha">
        <Card title="Card 1" Red>A</Card>
        <Card title="Card 2" Green>A</Card>
      </div>
      <div className="Linha">
        <Card title="Card 3" Blue>A</Card>
        <Card title="Card 4" Purple>A</Card>
      </div>
    </div>
  );
}

export default App;
