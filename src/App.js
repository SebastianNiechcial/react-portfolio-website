import "./App.css";
import Menu from "./components/Menu.js";
import Card from "./components/Card.js";

function App() {
  return (
    <>
      <Menu />
      <Card >
        <div className="text-[white]">Hej, nazywam się Sebastian Niechciał</div>
        <div className="text-white">Jestem Front-End Developerem z doświadczeniem w branży</div>
        <div className="text-white">Wykorzystywane Technologie:</div>
        <ul className="text-white list-disc ml-5">
          <li>Angular</li>
          <li>React</li>
          <li>Ionic</li>
          <li>HTML + CSS + JS</li>
        </ul>
      </Card>

    </>
  );
}

export default App;
