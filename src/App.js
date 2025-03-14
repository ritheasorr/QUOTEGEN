import Home from './pages/Home';
import Favorite from './pages/Favorite';

import {Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/favorite" element={<Favorite />} />
  </Routes>
}

      export default App;
