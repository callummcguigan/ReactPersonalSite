import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Elements/Nav';
import Home from './Pages/Home';
import Footer from './Elements/Footer';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className='App'>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
