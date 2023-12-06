import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, Navigate} from 'react-router-dom';
import Home from './pages/home';
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
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
