import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-success text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          Coded by Ingrid Ramoloto
        </footer>
      </div>
    </div>
  );
}

export default App;
