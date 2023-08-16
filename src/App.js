import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbartop from "./Navbartop";
import Main from "./Main";
import About from "./About";
import Play from "./Play";
import Earn from "./Earn";
import Tokenomics from "./Tokenomics";
import Footer from "./Footer"; 

function App() {
  return (
    <>
      <Navbartop />
      <Main /> 
      <About />
      <Play />
      <Earn />
      <Tokenomics /> 
      <Footer />
    </>
  );
}

export default App;
