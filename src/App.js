import "./App.scss";
import { About, Skills, Work } from "./container";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container__content">
        <About />
        <Work />
        <Skills />
      </div>
    </div>
  );
}

export default App;
