import React from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home/Home';
import Descricao from './components/Descricao/Descricao';
import Horas from './components/Horas/Horas';

function App() {
  return (
      <MainLayout>
        <Home/>
        <Descricao/>
        <Horas/>
      </MainLayout>
  );
}

export default App;


