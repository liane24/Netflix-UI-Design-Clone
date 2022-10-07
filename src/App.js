import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './pages/Account';
import {GetStarted} from './pages/GetStarted';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<GetStarted />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
