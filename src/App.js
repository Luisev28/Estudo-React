import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional'
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

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
      
      <Router>
       <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/empresa" element={<Empresa/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
        <Footer/>
      </Router>

      </div>
  );
}

export default App;
