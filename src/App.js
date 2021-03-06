import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>

        <Dictionary />
        <div className="row">
          <footer className="text-center mt-4">
            {" "}
            This project was coded by Olga Mang and is open-sourced on{" "}
            <a
              href="https://github.com/Ligeia1/react-dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://clever-meninsky-674469.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify{" "}
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
