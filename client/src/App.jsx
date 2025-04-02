import "./App.css";
import Companies from "./components/companies/Companies";
import Contact from "./components/contact/Contact";
import Extra from "./components/Extra/Extra";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Residencies from "./components/Residencies/Residencies";
// import AppRouter from "./components/router/AppRouter";
import Value from "./components/Value/Value";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
          <Extra />
        </div>

        {/* <AppRouter /> */}
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
