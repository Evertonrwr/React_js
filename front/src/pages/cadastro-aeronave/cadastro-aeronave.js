import "./cadastro_aeronave.css"
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane} from '@fortawesome/free-solid-svg-icons'


const CadastroAeronave = () => {
    return ( 

        <div className="container">  
        <a href="./"><FontAwesomeIcon icon={faArrowLeft}/></a>      
        <div className="titulo">Cadastro de aeronaves</div>
        <FontAwesomeIcon icon={faPlane}/>
        <form action="#">
            <div className="detalhes-aeronave">
                <InputCadastros id="Modelo-de-aeronave" type="text" placeholder="Digite o Modelo">Modelo de Aeronave</InputCadastros>
                <InputCadastros id="Motor" type="text" placeholder="Digite o motor">Motor</InputCadastros>
                <InputCadastros id="Certificaçao" type="text" placeholder="Digite a certificação">Certificação</InputCadastros>
                <InputCadastros id="Peso" type="number" placeholder="Digite o peso">Peso</InputCadastros>
                <InputCadastros id="Overspeed" type="text" placeholder="Digite o overspeed">Overspeed</InputCadastros>
                <InputCadastros id="Flap de pouso" type="number" placeholder="Digite o Flap de pouso">Flap de pouso</InputCadastros>

            </div>

            <div className="Reversor-details">
                <input type="radio" name="Reversor" id="dot-1"/>
                <input type="radio" name="Reversor" id="dot-2"/>
                <span className="Reversor-title">Reversor</span>

                <div className="category">

                    <label for="dot-1">
                        <span className="dot one"></span>
                        <span className="reversor">Usa reversor</span>
                    </label>

                    <label for="dot-2">
                        <span className="dot two"></span>
                        <span className="reversor">Não usa reversor</span>
                    </label>

                </div>

            </div>
            <div className="button">
                <input type="submit" value="Cadastrar"/>
            </div>
        </form>

    </div>

     );
}
 
export default CadastroAeronave;