import React from 'react';
import "./App.css";
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Info from './pages/Info';
import Features from './pages/Features';
import Footer from './pages/Footer';

const App = () => {
  return (
    <div className="body">
      <Navbar />
      <main className="content">
        <Home />
        <Info />
        <Features />
        <Footer />
      </main>
    </div>
  );
};

export default App;