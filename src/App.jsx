import React from 'react';
import Navbar from "./components/navbar"
import Home from './components/Home';
import About from './components/About';
import Tools from './components/Tools';
import Course from './components/Course';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Tools/>
    <Course/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
    </>
  );
}

export default App;
