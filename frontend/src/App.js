import React from 'react';
import './index.css'; // Importez le fichier index.css
import Login from './Login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup/Signup';
import Header from './Components/header/Header';
import Home from '../src/Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/about/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Popular from './Components/popular/Popular';
import Formation from './Components/Formation/Formation';
import Features from './Components/feature/Features';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Header' element={<Header />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/Footer' element={<Footer />}></Route>
        <Route path='/Popular' element={<Popular />}></Route>
        <Route path='/Formation' element={<Formation />}></Route>
        <Route path='/Features' element={<Features />}></Route> {/* Correction ici */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
