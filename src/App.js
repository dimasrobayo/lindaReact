import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Contents from './components/contents/Contents';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Aside />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;