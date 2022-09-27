import InputLogin from "../../componentes/inputLogin/inputLogin-Cadastro"
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons' 
import "./login.css";
import Botao from "../../componentes/botao/botao";


const Login = () => {
    return ( 
        <div id="form">
        <form action="">
            <h2 className="title">Login</h2>
            <InputLogin text="Email " id="email" placeholder="Digite seu email" type="text" icon={faEnvelope} />
            <InputLogin text="senha" id="senha" placeholder="Digite sua senha" type="password" icon={faLock}/>
            <Botao home="/">Login</Botao>
        
        </form>

    </div>
     );
}
 
export default Login;