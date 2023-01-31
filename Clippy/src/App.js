import "./App.css";
import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Tokenomics from "./Components/Tokenomics";
import Learn2Earn from "./Components/Learn2Earn";
import Roadmap from "./Components/Roadmap";

function App() {
  return (
    <div>
      <Navbar/>
      <Herosection />
      <About/>
      <Tokenomics/>
      <Learn2Earn/>
      <Roadmap/>
    </div>
  );
}

export default App;
