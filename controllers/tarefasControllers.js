const { mongodb: ServiceModel } = require('../models/tarefas');

const tarefasControllers = {
    create: async(req, res) =>{
        try {
            const {nome,tipo, descricao} = req.body;
        
            const user = await ServiceModel.create({nome,tipo, descricao});
            
            return res.status(200).send({
                status: 1,
                message: 'Tarefa Enviada com Sucesso !',
                user
            });
        } catch (error) {
            console.error(error); // Log do erro para investigação
            return res.status(400).send({ error: 'Falhou ao criar tarefa' });
        }
        
    
    },

    getAll: async (req, res) => {
            try {
                const tarefas = await ServiceModel.find();
                res.json(tarefas);              
            } catch (error) {
                console.error(error);
            
            }
        },
    get: async (req, res) => {
            try {
                const id = req.params.id;
                const tarefas = await ServiceModel.findById(id);
                if(!tarefas){
                res.status(400).json({msg:'Id não encontrado'});
                return;
                }
                res.json(tarefas);              
            } catch (error) {
                console.error(error);
            
            }
        },
       delete: async (req, res) => {
            try {
                const id = req.params.id;
                const tarefas = await ServiceModel.findById(id);
                if(!tarefas){
                res.status(400).json({msg:'Id não encontrado'});
                return;
                }
                const deletetarefa = await ServiceModel.findByIdAndDelete(id);
                res.status(200).json({deletetarefa, msg:'Tarefa apagada'})            
            } catch (error) {
                console.error(error);
            
            }
        },

    update: async(req, res) => {
        const id  = req.params.id;
        // const tarefa = {nome: req.body.name,
        //     tipo: req.body.tipe, 
        //     descricao: req.body.descricao
        // }
        const {nome,tipo, descricao} = req.body;
        const updateSrevice = await ServiceModel.findByIdAndUpdate(id, {nome,tipo, descricao})
        if(!updateSrevice){
            res.status(400).json({msg:'Id não encontrado'});
            return;
        }
        
        res.status(200).json({nome,tipo, descricao, msg:'Tarefa atualizada'})
    }   
};

module.exports = tarefasControllers; 