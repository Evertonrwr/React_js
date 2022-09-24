import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () =>{
    fetch("/vamo",{
        method:"GET",
        header: "Content-Type: text/html; charset=UTF-8",
    }).then((response)=> response.text()).then((data)=>{
        console.log(data)
    })
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={handleClick}>Login</button>
      </header>
    </div>
  );
}

export default App;
