import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Profile from '../pages/Profile';
import Repositories from '../pages/Repositories';
import Links from '../pages/Links';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/Links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
