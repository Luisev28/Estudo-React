import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List'

function App() {

  return (
    <div className="App">
      <SayMyName nome="Luis" />
      <Frase/>
      <Frase/>
      <Pessoa nome="Rodrigo"
      idade="28"
      profissao="programador"
      foto="http://via.placeholder.com/150" />


      <List/>



    </div>
  );
}

export default App;
