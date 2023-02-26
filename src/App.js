import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<Home/>}
        />
        <Route 
          path='/login'
          element={<Login/>}
        />
        <Route 
          path='/shop'
          element={<Shop/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;