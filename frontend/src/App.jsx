import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Upload from './pages/Upload';
import Login from './pages/Login';
import Signup from './pages/SignUp';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="Login" element={<Login />}/>
          <Route path="Signup" element={<Signup />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
