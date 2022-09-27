"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express in typescript file
const express_1 = __importDefault(require("express"));
const conexao_1 = __importDefault(require("./Conexao/conexao"));
const UsuarioController_1 = __importDefault(require("./Controller/UsuarioController"));
// Initialize the express engine
const app = (0, express_1.default)();
// Take a port 3000 for running server.
const port = 5000;
// Handling '/' Request
app.use(express_1.default.json());
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Expresss");
});
app.get("/vamo", (req, res) => [
    res.send("Hello World")
]);
app.get('/banco', (_req, _res) => {
    conexao_1.default.authenticate().then(function () {
        _res.send("Conectado com sucesso");
    }).catch(function (erro) {
        _res.send("Falha ao se conectar:" + erro);
    });
});
app.use(UsuarioController_1.default);
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
