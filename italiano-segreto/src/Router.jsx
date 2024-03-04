import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from "../src/Pages/Italiano"
import Firenze from '../src/Pages/Firenze'

function Router() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Firenze" element={<Firenze/>}/>
      </Routes>
    </BrowserRouter>
    );
  }
  
  export default Router;