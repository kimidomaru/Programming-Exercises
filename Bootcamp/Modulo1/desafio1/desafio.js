const express = require('express');

const server = express();

server.use(express.json());

const projetos = [{
    id: "0",
    title: "Teste",
    tasks: ["Tarefa teste"]
}];

function checkProjectExists(req, res, next){
    const { id } = req.params;
    const projeto = projetos.find(p => p.id == id);

    if(!projeto){
        return res.status(400).json({error : 'Project not found'});
    }

    return next();
};

function countReq(req, res, next){
    console.count('Nº de requisições: ');

    return next();
}

server.use(countReq);

//GET
server.get('/projects', (req, res) =>{
    return res.json(projetos);
});

//POST
server.post('/projects', (req, res) => {
    const { id, title } = req.body;
    const projeto = {id, title, tasks: []};

    projetos.push(projeto);

    return res.json(projetos);
});

//PUT
server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const projeto = projetos.find(p => p.id == id);

    projeto.title = title;

    return res.json(projeto);
});

//DELETE
server.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;

    const i = projetos.findIndex(p => p.id == id);

    projetos.splice(i, 1);

    return res.send();
});

server.listen(4000);
