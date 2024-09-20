import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from "../src/Pages/Italiano"
import CitiesPage from './Pages/CitiesPage';



function Router() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CitiesPage" element={<CitiesPage/>} />
        
      </Routes>
    </BrowserRouter>
    );
  }
  
  export default Router;