import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional'
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const meusItens = ['React', 'Vue', 'Angular'];
  const [ nome,setNome] = useState()

  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento/>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form/>
      <Condicional/>
      <h1>Renderização de Lista</h1>
      <OutraLista itens={meusItens} />

      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
