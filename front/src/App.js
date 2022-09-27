
// import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import CadastroAeronave from './pages/cadastro-aeronave/cadastro-aeronave';
import CadastroUsuario from './pages/Cadastro-usuario/cadastro-usuario';
import Calculo from './pages/calculo/calculo';
import Home from './pages/home/home';
import Login from './pages/login/login'

function App() {
  return (
    <div className="App">
    <Router>
    <div className="content">
      <Routes>
            <Route exact path="/" element={<Home/>}>
            </Route>            
            <Route exact path="/login" element={<Login/>}>
            </Route>
            <Route exact path="/Cadastro-Aeronave" element={<CadastroAeronave/>}>
            </Route>
            <Route exact path="/Cadastro-usuario" element={<CadastroUsuario/>}>
            </Route>
            <Route exact path="/Calculo" element={<Calculo/>}>
            </Route>
        </Routes>
     </div>
      </Router>
      </div>
  );
}

export default App;
