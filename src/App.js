import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary defaultKeyword="hello" />
      </main>
      <footer>
        This code was coded by{" "}
        <a
          href="https://martadomagala.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Marta Domagała
        </a>{" "}
        and it's{" "}
        <a
          href="https://github.com/Marbowle/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
