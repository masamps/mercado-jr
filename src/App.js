import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/home';
import Empresa from './pages/empresa';
import Navigator from './pages/navigator';
import Footer from './pages/footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigator />
      <Routes>
      <Route path="/mercado-jr/" element= {<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Empresa" element={<Empresa />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
