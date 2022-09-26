import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {GetStarted} from './pages/GetStarted';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<GetStarted />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}
