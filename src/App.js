import React from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home/Home';
import Descricao from './components/Descricao/Descricao';
import Horas from './components/Horas/Horas';
import Form from './components/Form/Form';

function App() {
  return (
      <MainLayout>
        <Home/>
        <Descricao/>
        <Horas/>
        <Form/>
      </MainLayout>
  );
}

export default App;