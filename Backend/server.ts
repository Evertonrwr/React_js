// Import the express in typescript file
import express from 'express';
import conexao from './Conexao/conexao';
import UsuarioController from './Controller/UsuarioController';
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 5000;
 
// Handling '/' Request
app.use(express.json())
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Expresss");
});
app.get("/vamo", (req, res)=>[
    res.send("Hello World")
])
app.get('/banco', (_req, _res) => {
    conexao.authenticate().then(function(){
        _res.send("Conectado com sucesso")
    }).catch(function(erro: string){
        _res.send("Falha ao se conectar:"+erro)
    })
    
});
 app.use(UsuarioController);
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});