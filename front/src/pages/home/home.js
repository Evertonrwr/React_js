import BotaoHome from "./botaoHome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import "./home.css"

const Home = () => {
    return ( 
        <div className="container">
            <div className="titulo">Home</div>
            <FontAwesomeIcon icon={faPlane}/>
            <form action="#">
                <div className="cadastro-aeronave">
                    <BotaoHome home="/Cadastro-Aeronave">Cadastro de Aeronave</BotaoHome>
                    <BotaoHome home="/Cadastro-usuario">Cadastro de usuário</BotaoHome>
                    <BotaoHome home="/Calculo">Cálculo</BotaoHome>
                </div>

            </form>

        </div>
     );
}
 
export default Home;