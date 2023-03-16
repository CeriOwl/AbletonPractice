import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SecondHeader from './SecondHeader';
import MenuUpDown from "./header/MenuUpDown"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuUpDown/>
    <Header/>
    <SecondHeader/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);

