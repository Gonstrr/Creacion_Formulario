import React from 'react';
import './App.css';
import Formulary from './components/form/Formulary'
import Header from './components/header/Header'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <handleSteps/>
      <Formulary/> 
      <Footer/>
    </div>
  );
}

export default App;
