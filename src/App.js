import "./App.scss";
import { About, Skills, Contact, Work, NotFound } from "./container";
import { Navbar } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Skills /> */}
      <Work />
      <Skills />
      <Contact />
      {/* <Routes>
        <Route path="/" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes> */}
    </div>
  );
}

export default App;
