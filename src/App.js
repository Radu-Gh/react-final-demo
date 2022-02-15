import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Page404 from './pages/page404/Page404';
import People from './pages/people/People';

function App() {
  return(
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/people" element={<People />}/>
          <Route path="*" element={<Page404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;