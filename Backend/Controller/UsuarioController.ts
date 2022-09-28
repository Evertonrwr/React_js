import e from "express";
import Router from "express";
import UsuarioModel from "../Models/UsuarioModel";


const UsuarioController = Router();


UsuarioController.post("/CadastrarUsuario", async (req, res)=>{
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.json({
            ok: false, 
            mensagem:"Por favor, preencha os dados para realizar o cadastro."})
        
    }else{
        try{
             await UsuarioModel.create({
                 email: dados.email,
                 nome: dados.nome,
                 senha: dados.senha,
                 TipoUsuario : dados.tipoUsuario
             });
             res.json({
                ok: true, 
                mensagem:"Usuario cadastrado com sucesso."})
 
         }catch(error){
            if(error == "SequelizeUniqueConstraintError: Validation error"){
                res.json({
                    ok: false, 
                    mensagem:"Email já cadastrado."})
            }else{
                res.json({
                    ok: false, 
                    mensagem:error})
            }
             
 
         }
    }
})

UsuarioController.patch("/AtualizarUsuario", async (req, res)=>{
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.json({
            ok: false, 
            mensagem:"Por favor, preencha os dados para atualizar o cadastro."})
        
    }else{
        var email = dados.email;
        UsuarioModel.findByPk(email?.toString()).then(async (data)=>{
          if(data!= null){
            await UsuarioModel.update({
                    nome: dados.nome,
                    senha: dados.senha
                },{where:{
                email : dados.email,
                }});

            res.json({
                ok: true, 
                mensagem:"Usuario atualizado com sucesso"})
          }else{
                res.json({
                    ok: false, 
                    mensagem:"Usuario não encontrado"})
            }
        })
       
    }
})

UsuarioController.get("/BucarUsuario", async(req, res)=>{
    var email = req.query.email;
    UsuarioModel.findByPk(email?.toString()).then((data)=>{
        res.json(data);
    })
   
})

UsuarioController.get("/ListarUsuarios", async(req,res)=>{
     await UsuarioModel.findAll().then((data)=>{
        res.json(data);
    });
   
})
UsuarioController.delete("/DeletarUsuario", async(req,res)=>{
    var email = req.query.email;
    await UsuarioModel.destroy({where: {email:email}}).then((data)=>{
        res.json(data)
    });
    
   
})

export default UsuarioController;
