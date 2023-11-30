import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import Home from './pages/home';
import Navigator from './pages/navigator';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigator />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
