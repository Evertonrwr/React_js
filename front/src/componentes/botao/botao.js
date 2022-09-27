import { Link } from "react-router-dom";
import "./botao.css"

const Botao = ({children,home}) => {
    return ( 
        <div className="botao">
            <Link to={home}><input type="button" value={children}/></Link>
        </div>
    );
}

export default Botao;