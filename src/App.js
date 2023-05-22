import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';

import Home from './pages/Home';
import Expertise from './pages/Expertise';
import Navbar from './components/navbar';
import Footer from './components/footer';
function App() {
  // const text1 = "Son corps idéal : elle voudrait prendre soin de sa peau facilement, et trouver une rutine skin care qui correspond à son type de peau sans passer des mois à contacter un spécialiste.";
  
  return (
    <div className="App w-full h-full relative bg-[#DEE4E4]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Expertise" element={<Expertise/>}></Route> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
