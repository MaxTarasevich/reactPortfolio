import React from 'react';

import './App.scss'

import {About, Footer, Header, Skills, Testimonial, Work} from './container/index'
import {Navbar} from './components/index'


function App() {
  return (
   <div className='app bg-primary font-DM'>

     <Navbar />
     <Header />
     <About />
     <Work />
     <Skills />
     <Testimonial />
     <Footer />

   </div>
  );
}

export default App;
