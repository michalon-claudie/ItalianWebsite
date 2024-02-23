import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from "../src/Pages/Italiano"

function Router() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    );
  }
  
  export default Router;