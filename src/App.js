import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
    </div>
  );
}

export default App;
