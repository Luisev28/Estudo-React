import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <SayMyName nome="Luis" />

      <Pessoa nome="Rodrigo"
      idade="28"
      profissao="programador"
      foto="http://via.placeholder.com/150" />
    </div>
  );
}

export default App;
