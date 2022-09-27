import "./calculo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faPlaneArrival} from '@fortawesome/free-solid-svg-icons'

const Calculo = () => {
    return ( 
        <div className="cont">    
        <a href="home.html"><FontAwesomeIcon icon={faArrowLeft}/></a>          
        <div className="titulo">Cálculo de pouso</div>
        <FontAwesomeIcon icon={faPlaneArrival}/>
        <form action="#">
            <div className="detalhes-aeronave">
                
                <div className="input-box">
                    <span className="details">Modelo da aeronave</span>
                    <input type="text" placeholder="Modelo da aeronave" required/>
                </div>

                <div className="input-box">
                    <span className="details">Motor</span>
                    <input type="text" placeholder="Motor da aeronave" required/>
                </div>

                <div className="input-box">
                    <span className="details">Certificação</span>
                    <input type="text" placeholder="Certificação da aeronave" required/>
                </div>

                <div className="input-box">
                    <span className="details">Peso</span>
                    <input type="text" placeholder="Peso da aeronave" oninput="this.value = this.value.replace(/[^0-9.]/g,'').replace(/(\..*?)\..*/g,'$1');" required/>
                </div>

                 <div className="input-box">
                    <span className="details">Altitude da pista de pouso</span>
                    <input type="text" placeholder="Altitude da pista de pouso" oninput="this.value = this.value.replace(/[^0-9.]/g,'').replace(/(\..*?)\..*/g,'$1');" required/>
                </div>

                <div className="input-box">
                    <span className="details">Temperatura</span>
                    <input type="text" placeholder="Temperatura" oninput="this.value = this.value.replace(/[^0-9.]/g,'').replace(/(\..*?)\..*/g,'$1');" required/>
                </div>

                <div className="input-box">
                    <span className="details">Vento</span>
                    <input type="text" placeholder="Vento" oninput="this.value = this.value.replace(/[^0-9.]/g,'').replace(/(\..*?)\..*/g,'$1');" required/>
                </div>

                <div className="input-box">
                    <span className="details">Slope(inclinação da pista)</span>
                    <input type="text" placeholder="Slope" oninput="this.value = this.value.replace(/[^0-9.]/g,'').replace(/(\..*?)\..*/g,'$1');" required/>
                </div>

                <div className="input-box">
                    <span className="details">Overspeed</span>
                    <input type="text" placeholder="Overspeed" oninput="this.value = this.value.replace(/[^0-9.]/g,'').replace(/(\..*?)\..*/g,'$1');" required/>
                </div>

                <div className="input-box">
                    <span className="details">Flap de pouso</span>
                    <input type="text" placeholder="Flap de pouso" oninput="this.value = this.value.replace(/[^0-9.]/g,'').replace(/(\..*?)\..*/g,'$1');" required/>
                </div>

                <div className="input-box">
                    <span className="details">Acúmulo de gelo</span>
                    <input type="text" placeholder="Acúmulo de gelo" oninput="this.value = this.value.replace(/[^0-9.]/g,'').replace(/(\..*?)\..*/g,'$1');" required/>
                </div>

                <div className="input-box">
                    <span className="details">Aplicação de freio</span>
                    <input type="text" placeholder="Aplicação de freio" required/>
                </div>

                <div className="input-box">
                    <span className="details">Condição de pista</span>
                    <input type="text" placeholder="Condição de pista" required/>
                </div> 

            </div>

            <div className="Reversor-details">
                <input type="radio" name="Reversor" id="dot-1"/>
                <input type="radio" name="Reversor" id="dot-2"/>
                <span className="Reversor-title">Reversor</span>

                <div className="category">

                    <label htmlFor="dot-1">
                        <span className="dot one"></span>
                        <span className="reversor">Usa reversor</span>
                    </label>

                    <label htmlFor="dot-2">
                        <span className="dot two"></span>
                        <span className="reversor">Não usa reversor</span>
                    </label>

                </div>

            </div>
            <div className="button">
                <input type="submit" value="Calcular"/>
            </div>
            <div className="input_box">
                <span className="details">Pista necessária</span>
                <input type="text" placeholder="Resultado"/>
            </div>
        </form>
    </div>


     );
}
 
export default Calculo;