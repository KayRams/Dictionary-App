import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer text-center">
          Coded by{" "}
          <em>
            <a href="https://github.com/KayRams/Dictionary-App">
              Ingrid Ramoloto
            </a>
          </em>{" "}
          and hosted on{" "}
          <em>
            <a href="https://reactdictionaryappjc.netlify.app/">Netlify</a>
          </em>
        </footer>
      </div>
    </div>
  );
}

export default App;
