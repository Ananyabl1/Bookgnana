import React from 'react';
import Home from './home/home';
import { Route, Routes } from "react-router-dom";
import Courses from './components/Courses';
import Signup from './components/Signup';
import Contacts from './components/Contacts';


function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contacts/>}/>


       
      </Routes>
    </>
  )
}

export default App
