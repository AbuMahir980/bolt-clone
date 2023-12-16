import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './test/reportWebVitals';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Main from './components/Main';
import Driver from './components/shared/DriverComp';
import Courier from './components/shared/CourierComp';
import ShopOwner from './components/shared/ShopOwnerComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    {/* <Main /> */}
    <Driver />
    <Courier />
    <ShopOwner />
    {/* <Hero /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
