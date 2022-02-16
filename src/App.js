import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Elements/Nav';
import Home from './Pages/Home';
import Footer from './Elements/Footer';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <div className='App'>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<Contact/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
