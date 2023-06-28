import React from 'react';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminHome from './pages/AdminHome';
import AdminLogin from './pages/AdminLogin';
import Booking from './pages/Booking';
import ClientLogin from './pages/ClientLogin';
import Explore from './pages/Explore';
import Items from './pages/Items';
import Registration from './pages/Registration';
import Reserve from './pages/Reserve';

const App = () => {
  return (
   
    <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/AdminHome" element={<AdminHome />} />
       <Route path="/AdminLogin" element={<AdminLogin />} />
       <Route path="/Booking" element={<Booking />} />
       <Route path="/ClientLogin" element={<ClientLogin />} />
       <Route path="/Explore" element={<Explore />} />
       <Route path="/Items" element={<Items />} />
       <Route path="/Register" element={<Registration />} />
       <Route path="/Reserve" element={<Reserve />} />


    </Routes>
   
  );
};

export default App;
