import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import Contact from './Contact';

function Contacts() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default Contacts;    
