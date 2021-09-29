import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import FormularioDatos from './views/FormularioDatos';
import ImprimirDatos from './views/ImprimirDatos';

function App() {

  const [datos, setDatos] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  return (
    <Container>
      <FormularioDatos datos={datos} setDatos={setDatos}/>
      <ImprimirDatos datos={datos}/>
    </Container>
  );
}

export default App;
