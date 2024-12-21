import NavBar from "./components/Navbar";
import Section from "./components/Section";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Microphone from "./components/Microphone";
import Text from "./components/Text";
import Footer from "./components/Footer";
import { TextProvider } from "./components/TextContext";

const App = () => {
  return (
    <TextProvider >
    <Router>
    <NavBar />
    <About />
    <Routes>
      <Route path="/" element={<Section />} >
        <Route path="/" element={<Microphone />} />
        <Route path="text" element={<Text />} />
      </Route>
    </Routes>
    <Footer />
    </Router>
    </TextProvider>
  )
}

export default App;