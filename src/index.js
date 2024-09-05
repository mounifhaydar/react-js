import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TryPro from './components/TryPro';
import { Home } from './components/Home';
import HelpCenter from './components/HelpCenter';
import ContactUs from './components/ContactUs';
import "./assets/style.css";
import "./assets/style-dark.css"
import "./assets/style-light.css"
import {AboutUs,History} from './components/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
              {/* Default element for '/' */}
              <Route index element={<Home />}/>

              {/* Other routes */}
              <Route path='/about' element={<AboutUs />}>
                  <Route path='history' element={<History />}/>
              </Route>
              <Route path='/contact' element={<ContactUs />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/pro' element={<TryPro />}/>
              <Route path='/help-center' element={<HelpCenter />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
