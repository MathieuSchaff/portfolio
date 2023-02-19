import "./App.scss";
import { About, Skills, Contact, Work, NotFound } from "./container";
import { Navbar } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      {/* 
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes> */}
      <About />
      {/* <Skills /> */}
      <Work />
      {/* <Skills /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
