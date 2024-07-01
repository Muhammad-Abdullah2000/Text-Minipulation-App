import './App.css';
import './index.css';
import About from './components/About.js';

import Navbar from './components/Navbar.';
import Textarea from './components/navbar/Textarea.js';
import React from "react";
import { useState } from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');

  const click = ()=>{
    if (mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
    else{
      
      setmode('dark');
      document.body.style.backgroundColor = 'gray';
    }
  }
  return (
   
   <>

 <BrowserRouter>
 <Navbar mode={mode} click={click}/>
 <Routes>
   <Route path='/' element={<Textarea title ="Enter your text" mode={mode}/>}></Route>
   <Route path='/about' element={<About mode={mode}/>}></Route>
   </Routes>
 </BrowserRouter>
         

  


   
         

 
    
    
 
   
   </>


  
   
               

   
  );
}

export default App;
