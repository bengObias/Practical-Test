import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Civil from './components/pages/Civil.js';
import Property from './components/pages/Property.js';
import Contact from './components/pages/Contact.js';
import Footer from './components/Footer.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        
          <Routes>
            <Route exact path='/' element={<Home/>}></Route> 
            <Route path='/about' element={<About/>}></Route> 
            <Route path='/civil' element={<Civil/>}></Route> 
            <Route path='/property' element={<Property/>}></Route> 
            <Route path='/contact' element={<Contact/>}></Route> 
          </Routes>
      </Router>

      <Router>
        <Footer/>
        <Routes>
          {/* <Route exact path='/' element={<Home/>}></Route> */}
          <Route path='/terms' element={<></>}></Route>
        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
