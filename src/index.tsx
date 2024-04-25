import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import PageHeader from './components/pageHeader';

import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Home from './pages/home';
import PageFooter from './components/pageFooter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <div id='page-body'>
        <PageHeader />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio'element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <PageFooter />
    </Router>
  </React.StrictMode>
);
