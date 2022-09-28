import express from 'express';
import conexao from './Conexao/conexao';
import UsuarioController from './Controller/UsuarioController';
import LoginController from './Controller/LoginController';

const app: express.Application = express();
const port: number = 5000;

app.use(express.json())

app.get('/', (_req, _res) => {
    _res.send("TypeScript With Expresss");
});

app.get('/banco', (_req, _res) => {
    conexao.authenticate().then(function(){
        _res.send("Conectado com sucesso")
    }).catch(function(erro: string){
        _res.send("Falha ao se conectar:"+erro)
    })
    
});
app.use(UsuarioController);
app.use(LoginController);

app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
