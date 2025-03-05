import "./App.css";
import Companies from "./components/companies/Companies";
import Extra from "./components/Extra/Extra";
import Header from "./components/Header/Header";
import Residencies from "./components/Residencies/Residencies";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
          <Extra />
        </div>

        <Companies />
        <Residencies />
      </div>
    </>
  );
}

export default App;
