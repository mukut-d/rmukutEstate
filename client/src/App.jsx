import "./App.css";
import Companies from "./components/companies/Companies";
import Extra from "./components/Extra/Extra";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
          <Extra />
        </div>

        <Companies />
      </div>
    </>
  );
}

export default App;
