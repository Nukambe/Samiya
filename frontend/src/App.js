import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import StatsPage from './components/StatsPage';
import ClubsPage from './components/ClubsPage';
import './App.css';


function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <StatsPage />
      <ClubsPage />
    </>
  );
}

export default App;
