import React from 'react';
import Footer from './Components/Footer';
import Button from './Components/Button';
import Alert from './Components/Alert';
import Header from './Components/Header';
import Course from './Components/Course';
import './App.css';

function App() {
  return (
    <div className="h-screen lg:h-full">
      <Header/>
      <Button/>
      <Alert/>
      <Course/>
      <Footer/>
    </div>
  );
}

export default App;
