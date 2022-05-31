import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import { Route, Routes } from 'react-router-dom';
import PageLogin from './Pages/PageLogin';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={ <PageLogin /> } />
      </Routes>
    </Provider>
  );
}

export default App;
