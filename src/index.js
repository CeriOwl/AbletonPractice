import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SecondHeader from './SecondHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <SecondHeader/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);

